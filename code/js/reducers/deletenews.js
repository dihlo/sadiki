const INITIAL_STATE = {
	newsDelete: {
		deletedata: {},
		deleteloading: false,		
	}
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "DELETE_NEWS":
		state.newsDelete.deleteloading = true;
		return state;
		case "DELETE_NEWS_OK":
		state.newsDelete.deleteloading = false;
		state.newsDelete.deletedata = action.responseData;
		return state;
		case "DELETE_NEWS_ERROR":
		state.newsDelete.deleteloading = false;
		state.newsDelete.deleteerror = action.responseData;
		return state;
	default:
		return state;
	}
}

