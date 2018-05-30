const INITIAL_STATE = {
	mealsData: {
		data: [],
		loading: false,
	},

}

export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "GET_MEALS":
		state.mealsData.loading = true;
		return state;
		case "GET_MEALS_OK":
		state.mealsData.loading = false;
		var arr = [];
		for (var key in action.responseData) {
	      action.responseData[key].id = action.responseData[key].id.$oid;
	      arr.push(action.responseData[key]);
	    }
	    state.mealsData.data = arr;
		return state;
		case "GET_MEALS_ERROR":
		state.mealsData.loading = false;
		state.mealsData.error = action.responseData;
		return state;
		case "DELETE_MEALS_OK":
			const data = state.mealsData.data.filter((item , index) => {
				console.log(item);
				if (item.id != action.payload ) {
					return item;
				}
			});
			state.mealsData.data = data;
			return state;
	default:
		return state;
	}
}


