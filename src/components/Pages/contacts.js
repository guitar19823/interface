import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Form from '../Form';
import Social from '../Social';

const Contacts = (props) => {
	return (
		<Fragment>
			<Social />
			<div className="contacts">
				<Header title={'Contacts'} />
	      <main>
	      	<Form />
				</main>
				<Footer {...props} />
			</div>
		</Fragment>
	);
};

export default Contacts;