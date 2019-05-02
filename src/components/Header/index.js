import React from 'react';

import './header.css';

const Header = (props) => {
	return (
		<header>
			<p>{props.title}</p>
		</header>
	);
};

export default Header;