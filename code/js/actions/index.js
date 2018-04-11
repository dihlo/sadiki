export const select = (id) => {
	return {
		type: "PAGE_SELECTED",
		payload: id,
	}
};