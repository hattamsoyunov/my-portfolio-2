import React from 'react';
import { Link } from 'react-router-dom';

function MenuLink({ children, isHome, goToSect, to, toggleMenu, ...rest }) {
	return isHome ? (
		<Link onClick={goToSect} to={to} {...rest}>
			{children}
		</Link>
	) : (
		<Link to={`/${to}`} onClick={toggleMenu} {...rest}>
			{children}
		</Link>
	);
}

export default MenuLink;
