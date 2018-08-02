import axios from 'axios';
import schedules from '../reducers/schedules';

export const postschedules = (data) => dispatch => {
    axios.defaults.headers.common = {};
    dispatch({
        type: "POST_SCHEDULES"
    });

    axios({
        method:'post',
        url:'http://saddev.s-vfu.ru/schedules',
        data: data
    })
    .then(function(response) {
        dispatch({
            type: "POST_SCHEDULES_OK",
            responseData: response.data,
        })
    }).then(function() {
        dispatch(schedules());
    })
    .catch(function (error) {
        console.log(error);
        dispatch({
            type: "POST_SCHEDULES_ERROR",
            responseData: "error_meals",
        });		  	
    });
};