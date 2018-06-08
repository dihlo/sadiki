const INITIAL_STATE = {
	mealsPut: {
		putdata: {},
		putloading: false,	
		payload: {},
	},
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "PUT_MEALS":		
			switch (action.payload.keyname) {
				case "calories":
					state.mealsPut.payload.calories = action.payload.value;
				return state;
				case "updated_at":
					state.mealsPut.payload.updated_at = action.payload.value;
				return state;
				case "name":
					state.mealsPut.payload.name = action.payload.value;
				return state;	
				case "description":
					state.mealsPut.payload.description = action.payload.value;
				return state;
				case "meal_date":
					state.mealsPut.payload.meal_date = action.payload.value;
				return state;
				case "weight":
					state.mealsPut.payload.weight = action.payload.value;
				return state;										
			}
		return state;
		case "SEND_PUT_MEALS":
			state.mealsPut.putloading = true;
		return state;
		case "SEND_PUT_MEALS_OK":
			state.mealsPut.loading = false;
			state.mealsPut.putloading = action.responseData;
		return state;
		case "SEND_PUT_MEALS_ERROR":
			state.mealsPut.putloading = false;
			state.mealsPut.putdata = action.responseData;
		return state;
	default:
		return state;
	}
}