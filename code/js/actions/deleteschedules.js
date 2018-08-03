import axios from 'axios';
import { schedules } from './schedules';

export const deleteschedules = (id) => {
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "DELETE_SCHEDULES"
		});

		axios({
		  method:'delete',
		  url:'http://saddev.s-vfu.ru/schedules/'+id,
		})
		  .then(function(response) {
		   	dispatch({
					type: "DELETE_SCHEDULES_OK",
					payload: id,
				});
			}).then(function() {
					dispatch(schedules());
			})
		  .catch(function (error) {
		   	dispatch({
				type: "DELETE_SCHEDULES_ERROR",
			});		  	
		});
	};
};
