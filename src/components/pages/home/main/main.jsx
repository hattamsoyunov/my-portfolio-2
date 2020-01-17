import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { withRouter } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';

import './main.sass';
import imgLayer1 from 'img/main_img.jpg';
import imgLayer2 from 'img/main_img_layer.png';
import imgLayer3 from 'img/main_img_layer2.png';
import angleTop from 'img/icons/angle_top.svg';

function scrollToNextSect() {
	gsap.to(window, 1.2, {
		scrollTo: window.innerHeight,
		ease: 'power3.inOut'
	})
}

function Main(props) {
	const mainImg = useRef(null);
	const scrollDown = {
		icon: useRef(null),
		dot: useRef(null),
		text: useRef(null)
	};

	useEffect(() => {
		VanillaTilt.init(mainImg.current, {
			max: 6,
			speed: 1500,
			glare: true,
			axis: 'x',
			"max-glare": .15,
		});

		gsap.fromTo(
			scrollDown.text.current, .7,
			{ opacity: 0 },
			{ opacity: 1, repeat: -1, repeatDelay: .4, yoyo: true }
		)
		
		gsap.fromTo(
			scrollDown.dot.current, .7,
			{ y: 0 },
			{ y: 3, repeat: -1, repeatDelay: .4, yoyo: true }
		)

		gsap.fromTo(
			scrollDown.icon.current, .7,
			{ y: 0 },
			{ y: 5, repeat: -1, repeatDelay: .4, yoyo: true }
		)
	}, [scrollDown]);

	return (
		<section className="main">
			<div className="container">
				<div className="main__row">
					<div className="main__col">
						<h1 className="main__title">Hi, <br /> my name is <span>Hatam Soyunov</span>, <br /> I'm <span>front-end</span> developer</h1>
						<h3 className="main__subtitle">with over <span>6 years</span> experience.</h3>
						<div className="main__lets">Let me show You...</div>
						{/* <Link to="/about" className="btn" title="Read more about me">
							<ReactSVG
								src={arrowRight}
								className='icon main__icon'
							/>
							<span>Read more about me</span>
						</Link> */}
					</div>
					<div className="main__col">
						<div className="main__img-wrap" ref={mainImg}>
							<img src={imgLayer1} alt="" onLoad={(e) => e.currentTarget.style.opacity = 1} />
							<img src={imgLayer2} alt="" onLoad={(e) => e.currentTarget.style.opacity = 1} />
							<img src={imgLayer3} alt="" onLoad={(e) => e.currentTarget.style.opacity = 1} />
						</div>
					</div>
				</div>
				<button className="scroll-btn scroll-btn--next" onClick={scrollToNextSect}>
					<div className="scroll-btn__icon" ref={scrollDown.icon}>
						<img src={angleTop} alt="" />
					</div>
					<div className="scroll-btn__dot" ref={scrollDown.dot}></div>
					<div className="scroll-btn__text">scroll down
						<div className="scroll-btn__text-overlay" ref={scrollDown.text}>scroll down</div>
					</div>
				</button>
			</div>
		</section>
	)
}

export default withRouter(Main);

