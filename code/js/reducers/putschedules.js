const INITIAL_STATE = {
	schedulesPut: {
		putdata: {},
		putloading: false,	
		payload: {},
	},
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "PUT_SCHEDULES":		
			switch (action.payload.keyname) {
				case "calories":
					state.schedulesPut.payload.calories = action.payload.value;
				return state;
				case "updated_at":
					state.schedulesPut.payload.updated_at = action.payload.value;
				return state;
				case "name":
					state.schedulesPut.payload.name = action.payload.value;
				return state;	
				case "description":
					state.mschedulesPut.payload.description = action.payload.value;
				return state;
				case "meal_date":
					state.schedulesPut.payload.meal_date = action.payload.value;
				return state;
				case "weight":
					state.schedulesPut.payload.weight = action.payload.value;
				return state;										
			}
		    return state;
		case "SEND_PUT_SCHEDULES":
			state.schedulesPut.putloading = true;
		    return state;
		case "SEND_PUT_SCHEDULES_OK":
			state.schedulesPut.loading = false;
			state.schedulesPut.putloading = action.responseData;
		    return state;
		case "SEND_PUT_SCHEDULES_ERROR":
			state.schedulesPut.putloading = false;
			state.schedulesPut.putdata = action.responseData;
		    return state;
	default:
		return state;
	}
}