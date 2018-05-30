const INITIAL_STATE = {
	mealsDelete: {
		deletedata: {},
		deleteloading: false,		
	}
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "DELETE_MEALS":
		state.mealsDelete.deleteloading = true;
		return state;
		case "DELETE_MEALS_OK":
		state.mealsDelete.deleteloading = false;
		state.mealsDelete.deletedata = action.responseData;
		return state;
		case "DELETE_MEALS_ERROR":
		state.mealsDelete.deleteloading = false;
		state.mealsDelete.deleteerror = action.responseData;
		return state;
	default:
		return state;
	}
}

