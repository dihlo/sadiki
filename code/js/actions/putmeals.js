import axios from 'axios';

export const putmeals = (value, id, keyname) => {

  return (dispatch) => dispatch({
    type: 'PUT_MEALS',
    payload: {
    	value: value,
    	id: id,
    	keyname: keyname,
    },
  });
};

export const sendputmeals = (data) => {
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "SEND_PUT_MEALS"
		});

		axios({
		  method:'put',
		  url:'http://saddev.s-vfu.ru/meals/' + data.id,
		  data: data,
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "SEND_PUT_MEALS_OK",
				responseData: response.data,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "SEND_PUT_MEALS_ERROR",
				responseData: "error_meals",
			});		  	
		});
	};
};