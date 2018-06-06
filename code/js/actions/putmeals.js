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