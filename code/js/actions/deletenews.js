import axios from 'axios';

export const deletenews = (id) => {
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "DELETE_NEWS"
		});

		axios({
		  method:'delete',
		  url:'http://saddev.s-vfu.ru/news/'+id,
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "DELETE_NEWS_OK",
				payload: id,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "DELETE_NEWS_ERROR",
			});		  	
		});
	};
};
