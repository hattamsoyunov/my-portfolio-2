import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import './left-bar.sass';
import logo from '../../img/logo.svg';
import angleTop from '../../img/icons/angle_top.svg';
import arrowLeft from 'img/icons/arrow_left.svg';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

function Logo({ type }) {
	const handleScrollTo = () => {
		window.scrollTo(0, 0);
	};

	const handleScrollToWithAnimation = () => {
		gsap.to(window, 1, { scrollTo: 0, ease: 'expo.out' });
	};

	switch (type) {
		case 'button':
			return (
				<button className="left-bar__logo" onClick={handleScrollToWithAnimation}>
					<img src={logo} alt="" />
				</button>
			);

		case 'link':
			return (
				<Link to="/" className="left-bar__logo" onClick={handleScrollTo}>
					<img src={logo} alt="" />
				</Link>
			);

		default:
			return (
				<div className="left-bar__logo">
					<img src={logo} alt="" />
				</div>
			);
	}
}

function BackBtn() {
	const history = useHistory();

	const handleBackBtn = () => {
		history.goBack();
	};

	return (
		<Link to="/" className="btn btn--back left-bar__back-btn" onClick={handleBackBtn}>
			<ReactSVG src={arrowLeft} className="icon icon--arrow-left" />
			<span>Back</span>
		</Link>
	);
}

function LeftBar(props) {
	const isHome = props.location.pathname === '/';
	const logo = isHome ? <Logo type="button" /> : <Logo type="link" />;
	const backBtn = !isHome && window.outerWidth > 768 ? <BackBtn /> : null;

	const handleScrollToWithAnimation = () => {
		gsap.to(window, 1, { scrollTo: 0, ease: 'expo.out' });
	};

	return (
		<div className="left-bar">
			<div className="left-bar__top">
				{logo}
				{backBtn}
			</div>

			<div className="left-bar__middle">
				<div className="left-bar__designed">
					<span>Designed by hattam</span>
				</div>
			</div>

			<div className="left-bar__bottom">
				<button className="scroll-btn scroll-btn--totop" onClick={handleScrollToWithAnimation}>
					<div className="scroll-btn__icon">
						<img src={angleTop} alt="" />
					</div>
					<div className="scroll-btn__dot"></div>
					<div className="scroll-btn__text">scroll top</div>
				</button>
			</div>
		</div>
	);
}

export default withRouter(LeftBar);
