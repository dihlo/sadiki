import axios from 'axios';

export const putschedules = (value, id, keyname) => {

  return (dispatch) => dispatch({
    type: 'PUT_SCHEDULES',
    payload: {
    	value: value,
    	id: id,
    	keyname: keyname,
    },
  });
};

export const sendputschedules = (data) => {
	return (dispatch) => {
		console.log('sendputschedules');
		console.log(data);
		axios.defaults.headers.common = {};
		dispatch({
			type: "SEND_PUT_SCHEDULES"
		});

		

		axios({
		  method:'put',
		  url:'http://saddev.s-vfu.ru/schedules/' + data.id,
		  data: data,
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "SEND_PUT_SCHEDULES_OK",
				responseData: response.data,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "SEND_PUT_SCHEDULES_ERROR",
				responseData: "error_meals",
			});		  	
		});
	};
};