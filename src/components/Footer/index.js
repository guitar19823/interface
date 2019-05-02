import React from 'react';

import './footer.css';

const Footer = (props) => {
	const content = props.group === 'menu' ? (
		<div>
      <p>&copy; Copyright 2018 - {new Date().getFullYear()}.</p>
    </div>
	) : (
		<div className="buttons">
      {props.group === 'settings' && <div onClick={props.handleEnter}>accept</div>}
      <div
        onClick={() => props.closePage('close-right', {
          onHome: true
        })}
      >
        menu
      </div>
    </div>
	);
	
	return (
		<footer>
    	{content}
      <div className="version">v 1.0.1</div>
    </footer>
	);
};

export default Footer;