import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';

import './pages.css';

import {
  actionInvertionY,
  actionAntiAliasing,
  actionMouseSensivity,
  actionTextureDetails,
  actionGraphicDetails
} from '../../actions/settings';

const levels = [
	'low', 'medium', 'high'
];

const Settings = (props) => {
	const {
		invertionY,
    antiAliasing,
    sensivity,
    texture,
    graphic,
		checkInvertionY,
    checkAntiAliasing,
    mouseSensivity,
    textureDetails,
    graphicDetails
	} = props;
	
	return (
		<div className="settings">
      <Header title={'Settings'} />
      <main>
        <div>
          <p>Axis inversion Y</p>
          <label className="checkbox" onChange={() => checkInvertionY(!invertionY)}>
          	<input type="checkbox" defaultChecked={invertionY} />
          	<span className="box"></span>
          </label>
        </div>
        <div>
          <p>Anti-aliasing</p>
          <label className="checkbox" onChange={() => checkAntiAliasing(!antiAliasing)}>
          	<input type="checkbox" defaultChecked={antiAliasing} />
          	<span className="box"></span>
          </label>
        </div>
        <div>
          <p>Mouse sensivity</p>
          <div className="setting-level">
          	<span className="arrow-left" onClick={() => mouseSensivity(-1, sensivity)}></span>
          	<span>{sensivity}</span>
          	<span className="arrow-right" onClick={() => mouseSensivity(1, sensivity)}></span>
        	</div>
        </div>
        <div>
          <p>Texture details</p>
          <div className="setting-level">
          	<span className="arrow-left" onClick={() => textureDetails(-1, texture)}></span>
          	<span>{levels[texture]}</span>
          	<span className="arrow-right" onClick={() => textureDetails(1, texture)}></span>
        	</div>
        </div>
        <div>
          <p>graphics</p>
          <div className="setting-level">
          	<span className="arrow-left" onClick={() => graphicDetails(-1, graphic)}></span>
          	<span>{levels[graphic]}</span>
          	<span className="arrow-right" onClick={() => graphicDetails(1, graphic)}></span>
        	</div>
        </div>
      </main>
      <Footer group={'settings'} {...props} />
		</div>
	);
};

const mapStateToProps = (state) => (
  {
    invertionY: state.settings.invertionY,
    antiAliasing: state.settings.antiAliasing,
    sensivity: state.settings.sensivity,
    texture: state.settings.texture,
    graphic: state.settings.graphic
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    checkInvertionY: (value) => {
      dispatch(actionInvertionY(value))
    },
    checkAntiAliasing: (value) => {
      dispatch(actionAntiAliasing(value))
    },
    mouseSensivity: (value, sensivity) => {
      dispatch(actionMouseSensivity(value, sensivity))
    },
    textureDetails: (value, texture) => {
      dispatch(actionTextureDetails(value, texture))
    },
    graphicDetails: (value, graphic) => {
      dispatch(actionGraphicDetails(value, graphic))
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);