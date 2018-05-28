const INITIAL_STATE = {
	mealsPost: {
		data: {},
		loading: false,		
	}
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "POST_MEALS":
		state.mealsPost.loading = true;
		return state;
		case "POST_MEALS_OK":
		state.mealsPost.loading = false;
		state.mealsPost.data = action.responseData;
		return state;
		case "POST_MEALS_ERROR":
		state.mealsPost.loading = false;
		state.mealsPost.error = action.responseData;
		return state;
	default:
		return state;
	}
}

