import axios from 'axios';

export const deletemeals = (id) => {
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "DELETE_MEALS"
		});

		axios({
		  method:'delete',
		  url:'http://saddev.s-vfu.ru/meals/'+id,
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "DELETE_MEALS_OK",
				payload: id,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "DELETE_MEALS_ERROR",
			});		  	
		});
	};
};
