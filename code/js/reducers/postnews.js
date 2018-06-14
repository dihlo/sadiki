const INITIAL_STATE = {
	newsPost: {
		data: {},
		loading: false,		
	}
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "POST_NEWS":
		state.newsPost.loading = true;
		return state;
		case "POST_NEWS_OK":
		state.newsPost.loading = false;
		state.newsPost.data = action.responseData;
		return state;
		case "POST_NEWS_ERROR":
		state.newsPost.loading = false;
		state.newsPost.error = action.responseData;
		return state;
	default:
		return state;
	}
}

