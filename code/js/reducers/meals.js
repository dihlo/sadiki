const INITIAL_STATE = {
	mealsData: {
		data: {},
		loading: false,
	}
}

export default function (state=INITIAL_STATE, action) {
	console.log(action);
	switch (action.type) {
		case "GET_MEALS":
		state.mealsData.loading = true;
		return state;
		case "GET_MEALS_OK":
		state.mealsData.loading = false;
		state.mealsData.data = action.responseData;
		return state;
		case "GET_MEALS_ERROR":
		state.mealsData.loading = false;
		state.mealsData.error = action.responseData;
		return state;
	default:
		return state;
	}
}

