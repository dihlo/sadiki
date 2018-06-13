import axios from 'axios';

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
		  	console.log(response);
		   	dispatch({
				type: "DELETE_SCHEDULES_OK",
				payload: id,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "DELETE_SCHEDULES_ERROR",
			});		  	
		});
	};
};
