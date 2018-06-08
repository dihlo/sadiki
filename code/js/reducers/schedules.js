const INITIAL_STATE = {
	schedulesData: {
		data: [],
		loading: false,
	},

}

export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "GET_SCHEDULES":
		state.schedulesData.loading = true;
		return state;
		case "GET_SCHEDULES_OK":
		state.schedulesData.loading = false;
		var arr = [];
		for (var key in action.responseData) {
			action.responseData[key].key = key;
			action.responseData[key].id = action.responseData[key].id.$oid;
			arr.push(action.responseData[key]);
	    }
	    state.schedulesData.data = arr;
		return state;
		case "GET_SCHEDULES_ERROR":
		state.schedulesData.loading = false;
		state.schedulesData.error = action.responseData;
		return state;
	default:
		return state;
	}
}


