import axios from 'axios';

export const meals = () => {
	console.log('Я в то апи');
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "GET_MEALS"
		});

		axios({
		  method:'get',
		  url:'http://saddev.s-vfu.ru/meals',
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "GET_MEALS_OK",
				responseData: response.data,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "GET_MEALS_ERROR",
				responseData: "error_meals",
			});		  	
		});
	};
};