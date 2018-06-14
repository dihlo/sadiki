const INITIAL_STATE = {
	newsData: {
		data: [],
		loading: false,
	},

}

export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "GET_NEWS":
		state.newsData.loading = true;
		return state;
		case "GET_NEWS_OK":
		state.newsData.loading = false;
		var arr = [];
		for (var key in action.responseData) {
			action.responseData[key].key = key;
			action.responseData[key].id = action.responseData[key].id.$oid;
			arr.push(action.responseData[key]);
	    }
	    state.newsData.data = arr;
		return state;
		case "GET_NEWS_ERROR":
		state.newsData.loading = false;
		state.newsData.error = action.responseData;
		return state;
		case "DELETE_NEWS_OK":
			const data = state.newsData.data.filter((item , index) => {
				console.log(item);
				if (item.id != action.payload ) {
					return item;
				}
			});
			state.newsData.data = data;
			return state;
	default:
		return state;
	}
}