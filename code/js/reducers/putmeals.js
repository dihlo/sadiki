const INITIAL_STATE = {
	mealsPut: {
		payload: {},
		payloadcalories: {},
		payloadupdatedat: {},
	},
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "PUT_MEALS":
			console.log(state.mealsPut.payloadcalories);
			console.log(state.mealsPut.payloadupdatedat);
			switch (action.payload.keyname) {
				case "calories":
					state.mealsPut.payloadcalories.keyname = 'calories';
					state.mealsPut.payloadcalories.value = action.payload.value;
				return state;
				case "updated_at":
					state.mealsPut.payloadupdatedat.keyname = 'updated_at';
					state.mealsPut.payloadupdatedat.value = action.payload.value;
				return state;	
			}
		return state;
	default:
		return state;
	}
}