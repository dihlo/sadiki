const INITIAL_STATE = {
	schedulesPost: {
		data: {},
		loading: false,		
	}
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "POST_SCHEDULES":
            state.schedulesPost.loading = true;
            return state;
		case "POST_SCHEDULES_OK":
            state.schedulesPost.loading = false;
            state.schedulesPost.data = action.responseData;
            return state;
		case "POST_SCHEDULES_ERROR":
            state.schedulesPost.loading = false;
            state.schedulesPost.error = action.responseData;
            return state;
	default:
		return state;
	}
}

