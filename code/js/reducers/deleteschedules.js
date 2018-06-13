const INITIAL_STATE = {
	schedulesDelete: {
		deletedata: {},
		deleteloading: false,		
	}
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "DELETE_SCHEDULES":
		state.schedulesDelete.deleteloading = true;
		return state;
		case "DELETE_SCHEDULES_OK":
		state.schedulesDelete.deleteloading = false;
		state.schedulesDelete.deletedata = action.responseData;
		return state;
		case "DELETE_SCHEDULES_ERROR":
		state.schedulesDelete.deleteloading = false;
		state.schedulesDelete.deleteerror = action.responseData;
		return state;
	default:
		return state;
	}
}

