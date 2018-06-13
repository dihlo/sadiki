import axios from 'axios';

export const postschedules = (data) => {
	console.log('Я в то апи');
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "POST_SCHEDULES"
		});

		axios({
		  method:'post',
		  url:'http://saddev.s-vfu.ru/schedules',
		  data: data
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "POST_SCHEDULES_OK",
				responseData: response.data,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "POST_SCHEDULES_ERROR",
				responseData: "error_meals",
			});		  	
		});
	};
};