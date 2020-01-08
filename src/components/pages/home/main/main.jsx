import React from 'react'
// import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import gsap from 'gsap';

import './main.sass';
import mainImg from 'img/main_img.jpg';
import angleTop from 'img/icons/angle_top.svg';
import arrowRight from 'img/icons/arrow_right.svg';

function Main(props) {
	return (
		<section className="main">
			<div className="container">
				<div className="main__row">
					<div className="main__col">
						<h1 className="main__title">Hi, <br /> my name is <span>Hatam Soyunov</span>, <br /> I front-end developer.</h1>
						<a href="/" className="btn">
							<ReactSVG
								src={arrowRight}
								className='icon main__icon'
							/>
							<span>About me</span>
						</a>
					</div>
					<div className="main__col">
						<div className="main__img-wrap">
							<img src={mainImg} alt="" />
							<div className="main__img-bg"></div>
						</div>
					</div>
				</div>
				<button className="scroll-btn scroll-btn--next" onClick={() => gsap.to(window, 1.2, { scrollTo: window.innerHeight, ease: 'power3.inOut' })}>
					<div className="scroll-btn__icon">
						<img src={angleTop} alt="" />
					</div>
					<div className="scroll-btn__dot"></div>
					<div className="scroll-btn__text">scroll down</div>
				</button>
			</div>
		</section>
	)
}

Main.propTypes = {

}

export default Main

