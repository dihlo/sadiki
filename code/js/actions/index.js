import axios from 'axios';

export const select = (id) => {
	return {
		type: "PAGE_SELECTED",
		payload: id,
	}
};

export const toapi = () => {
	return (dispatch) => {
		dispatch({
			type: "TO_API"
		});

		axios.post('http://khar.s-vfu.ru/authenticate', {
		    email: 'doro@doro.ro',
		    password: '123qwe123'
		  })
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
		  });

	};
};