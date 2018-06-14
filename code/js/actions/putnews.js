import axios from 'axios';

export const putnews = (value, id, keyname) => {
	console.log('putnews');
  return (dispatch) => dispatch({
    type: 'PUT_NEWS',
    payload: {
    	value: value,
    	id: id,
    	keyname: keyname,
    },
  });
};

export const sendputnews = (data) => {
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "SEND_PUT_NEWS"
		});

		axios({
		  method:'put',
		  url:'http://saddev.s-vfu.ru/news/' + data.id,
		  data: data,
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "SEND_PUT_NEWS_OK",
				responseData: response.data,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "SEND_PUT_NEWS_ERROR",
				responseData: "error_meals",
			});		  	
		});
	};
};