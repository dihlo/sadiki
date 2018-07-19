const INITIAL_STATE = {
	pageID: '1',
}

export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "PAGE_SELECTED":
		state.pageID = action.payload;
		return state;
		break;
	default:
		return state;
	}
}

