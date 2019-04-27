const actionInvertionY = (value) => (dispatch) => {
	dispatch({
		type: 'INVERTION_Y',
		payload: value
	});
};

const actionAntiAliasing = (value) => (dispatch) => {
	dispatch({
		type: 'ANTI_ALIASING',
		payload: value
	});
};

const actionMouseSensivity = (value, sensivity) => (dispatch) => {
	dispatch({
		type: 'MOUSE_SENSIVITY',
		payload: getPayload(value, sensivity, 1, 10)
	});
};

const actionTextureDetails = (value, texture) => (dispatch) => {
	dispatch({
		type: 'TEXTURE_DETAILS',
		payload: getPayload(value, texture, 0, 2)
	});
};

const actionGraphicDetails = (value, graphic) => (dispatch) => {
	dispatch({
		type: 'GRAPHIC_DETAILS',
		payload: getPayload(value, graphic, 0, 2)
	});
};

const getPayload = (value, state, min, max) => {
	return state + value > max ? max : state + value < min ? min : state + value;
};

export {
	actionInvertionY,
	actionAntiAliasing,
	actionMouseSensivity,
	actionTextureDetails,
	actionGraphicDetails
};