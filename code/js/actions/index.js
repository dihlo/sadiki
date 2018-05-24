import axios from 'axios';

export const select = (id) => {
	return {
		type: "PAGE_SELECTED",
		payload: id,
	}
};

export const toapi = () => {
	console.log('Я в то апи');
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "TO_API"
		});

		axios({
		  method:'get',
		  url:'http://saddev.s-vfu.ru/meals',
		})
		  .then(function(response) {
		  	console.log('Я в ответе');
		   	dispatch({
				type: "TO_API_OK",
				data: response.data,
			});
		  })
		  .catch(function (error) {
		  	console.log('Я в ошибке');
		   	dispatch({
				type: "TO_API_ERROR",
				data: "error_auth",
			});		  	
		});

		/*axios.get('http://saddev.s-vfu.ru/meals')
		  .then(function (response) {
		    console.log(response);
		   	dispatch({
				type: "TO_API_OK",
				data: response.data,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "TO_API_ERROR",
				data: "error_auth",
			});		  	
		    console.log(error);
		  });*/

	};
};