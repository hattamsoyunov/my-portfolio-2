import React from 'react';
// import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin'

import './left-bar.sass';
import logo from '../../img/logo.svg';
import angleTop from '../../img/icons/angle_top.svg';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

function LeftBar(props) {
	return (
		<div className="left-bar">
			<div className="left-bar__logo">
				<img src={logo} alt=""/>
			</div>

			<div className="left-bar__designed">
				<span>Designed by hattam</span>
			</div>

			<button className="scroll-btn scroll-btn--totop" onClick={() => gsap.to(window, 1, { scrollTo: 0, ease: 'expo.out' })}>
				<div className="scroll-btn__icon">
					<img src={angleTop} alt="" />
				</div>
				<div className="scroll-btn__dot"></div>
				<div className="scroll-btn__text">scroll top</div>
			</button>
		</div>
	)
}

LeftBar.propTypes = {

}

export default LeftBar;