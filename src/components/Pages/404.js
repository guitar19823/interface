import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import './pages.css';

const NotFound = (props) => {
	return (
		<div className="not-found">
			<Header title={'Error'} />
      <main>
      	<div>
					<p>404</p>
					<p>Page not found</p>
				</div>
			</main>
			<Footer {...props} />
		</div>
	);
};

export default NotFound;