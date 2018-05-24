const INITIAL_STATE = {
	authdata: {
		rows: null,
		loading: false,
		error: "",
	}
}

export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "TO_API":
		state.authdata.loading = true;
		return state;
		case "TO_API_OK":
		state.authdata.loading = false;
		state.authdata.rows = action.data;
		return state;
		case "TO_API_ERROR":
		state.authdata.loading = false;
		state.authdata.error = action.data;
		return state;
	default:
		return state;
	}
}

