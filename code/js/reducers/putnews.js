const INITIAL_STATE = {
	newsPut: {
		putdata: {},
		putloading: false,	
		payload: {},
	},
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "PUT_NEWS":		
			switch (action.payload.keyname) {
				case "title":
					state.newsPut.payload.title = action.payload.value;
				return state;
				case "body":
					state.newsPut.payload.body = action.payload.value;
				return state;
				case "published":
					state.newsPut.payload.published = action.payload.value;
				return state;	
			}
		return state;
		case "SEND_PUT_NEWS":
			state.newsPut.putloading = true;
		return state;
		case "SEND_PUT_NEWS_OK":
			state.newsPut.loading = false;
			state.newsPut.putloading = action.responseData;
		return state;
		case "SEND_PUT_NEWS_ERROR":
			state.newsPut.putloading = false;
			state.newsPut.putdata = action.responseData;
		return state;
	default:
		return state;
	}
}