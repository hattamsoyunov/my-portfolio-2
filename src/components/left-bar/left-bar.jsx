import React from 'react';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import './left-bar.sass';
import logo from '../../img/logo.svg';
import angleTop from '../../img/icons/angle_top.svg';
import { Link, withRouter } from 'react-router-dom';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

function LeftBar(props) {
	const isHome = props.location.pathname === '/';

	return (
		<div className="left-bar">
			{isHome ? (
				<div
					className="left-bar__logo"
					onClick={() => gsap.to(window, 1, { scrollTo: 0, ease: 'expo.out' })}
				>
					<img src={logo} alt="" />
				</div>
			) : (
				<Link
					to="/"
					className="left-bar__logo"
					onClick={() => window.scrollTo(0, 0)}
				>
					<img src={logo} alt="" />
				</Link>
			)}

			<div className="left-bar__designed">
				<span>Designed by hattam</span>
			</div>

			<button
				className="scroll-btn scroll-btn--totop"
				onClick={() => gsap.to(window, 1, { scrollTo: 0, ease: 'expo.out' })}
			>
				<div className="scroll-btn__icon">
					<img src={angleTop} alt="" />
				</div>
				<div className="scroll-btn__dot"></div>
				<div className="scroll-btn__text">scroll top</div>
			</button>
		</div>
	);
}

export default withRouter(LeftBar);
