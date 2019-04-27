const inicialState = {
	invertionY: true,
	antiAliasing: true,
	sensivity: 5,
	texture: 1,
	graphic: 1
}

const settings = (state = inicialState, action) => {
	switch(action.type) {
		case 'INVERTION_Y':
			return {
				invertionY: action.payload,
				antiAliasing: state.antiAliasing,
				sensivity: state.sensivity,
				texture: state.texture,
				graphic: state.graphic
			};

		case 'ANTI_ALIASING':
			return {
				invertionY: state.invertionY,
				antiAliasing: action.payload,
				sensivity: state.sensivity,
				texture: state.texture,
				graphic: state.graphic
			};

		case 'MOUSE_SENSIVITY':
			return {
				invertionY: state.invertionY,
				antiAliasing: state.antiAliasing,
				sensivity: action.payload,
				texture: state.texture,
				graphic: state.graphic
			};

		case 'TEXTURE_DETAILS':
			return {
				invertionY: state.invertionY,
				antiAliasing: state.antiAliasing,
				sensivity: state.sensivity,
				texture: action.payload,
				graphic: state.graphic
			};

		case 'GRAPHIC_DETAILS':
			return {
				invertionY: state.invertionY,
				antiAliasing: state.antiAliasing,
				sensivity: state.sensivity,
				texture: state.texture,
				graphic: action.payload
			};

		default:
			return state;
	}
};

export default settings;