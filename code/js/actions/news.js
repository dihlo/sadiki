import axios from 'axios';

export const news = () => {
	console.log('Я в news');
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "GET_NEWS"
		});

		axios({
		  method:'get',
		  url:'http://saddev.s-vfu.ru/news',
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "GET_NEWS_OK",
				responseData: response.data,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "GET_NEWS_ERROR",
				responseData: "error_meals",
			});		  	
		});
	};
};
