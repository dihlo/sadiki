import axios from 'axios';

export const postmeals = (name, calories) => {
	console.log('Я в то апи');
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "POST_MEALS"
		});

		axios({
		  method:'post',
		  url:'http://saddev.s-vfu.ru/meals',
		  data: {
		    name: name,
		    calories: calories
		  }
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "POST_MEALS_OK",
				responseData: response.data,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "POST_MEALS_ERROR",
				responseData: "error_meals",
			});		  	
		});
	};
};