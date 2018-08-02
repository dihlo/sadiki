import axios from 'axios';

export function schedules() {
    return (dispatch) => {
        axios.defaults.headers.common = {};
        dispatch({
            type: "GET_SCHEDULES"
        });

        axios({
            method:'get',
            url:'http://saddev.s-vfu.ru/schedules',
        })
        .then(function(response) {
            dispatch({
                type: "GET_SCHEDULES_OK",
                responseData: response.data,
            });
        })
        .catch(function (error) {
            dispatch({
                type: "GET_SCHEDULES_ERROR",
                responseData: "error_meals",
            });		  	
        });
    }
};
