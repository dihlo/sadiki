import axios from 'axios';

export const postnews = (data) => {
	console.log('Я в то postnews');
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "POST_NEWS"
		});

		axios({
		  method:'post',
		  url:'http://saddev.s-vfu.ru/news',
		  data: data
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "POST_NEWS_OK",
				responseData: response.data,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "POST_NEWS_ERROR",
				responseData: "error_meals",
			});		  	
		});
	};
};