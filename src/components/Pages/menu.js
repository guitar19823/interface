import React from 'react';
import routes from '../App/routes';
import Header from '../Header';
import Footer from '../Footer';

import './pages.css';

const Nav = (props) => {
	return (
		<div className="menu">
			<Header title={'Menu'} />
      <main>
      	{
      		routes.map(({path, name, img}) => {
      			if (name !== 'Menu' && name !== 'NotFound') {
							return (
								<div
									key={name}
									onClick={() => props.closePage('close-left', {
				            menuClose: true,
				            path: path
				          })}
								>
									<p>
										<img src={img} alt={name}/>
										{name}
									</p>
								</div>
							);
						}

						return null;
					})
      	}
			</main>
			<Footer group={'menu'} {...props} />
		</div>
	);
};

export default Nav;