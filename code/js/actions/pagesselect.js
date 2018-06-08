export const select = (id) => {
	return (dispatch) => dispatch({
		type: "PAGE_SELECTED",
		payload: id,
	});
};
