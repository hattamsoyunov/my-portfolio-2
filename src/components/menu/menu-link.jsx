import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from './../../actions';
import { NavLink } from 'react-router-dom';

function MenuLink({ children, toggleMenu, ...rest }) {
	return (
		<NavLink
			className="menu__link"
			activeClassName="menu__link--active"
			onClick={toggleMenu}
			{...rest}
		>
			{children}
		</NavLink>
	);
}

export default connect(null, { toggleMenu })(MenuLink);