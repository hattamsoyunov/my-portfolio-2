import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './scroll-to-next.sass';
import angleTop from 'img/icons/angle_top.svg';

function scrollToNextSect(nextSectSelector) {
	gsap.to(window, 1.2, {
		scrollTo: document.querySelector(nextSectSelector).offsetTop,
		ease: 'power3.inOut'
	});
}

export default function ScrollToNext({ nextSectSelector }) {
	const btn = {
		icon: useRef(null),
		dot: useRef(null),
		text: useRef(null)
	};

	useEffect(() => {
		gsap.killTweensOf([btn.text.current, btn.icon.current, btn.dot.current]);

		gsap.fromTo(btn.text.current, 0.7, { opacity: 0 }, { opacity: 1, repeat: -1, repeatDelay: 0.4, yoyo: true });

		gsap.fromTo(btn.dot.current, 0.7, { y: 0 }, { y: 3, repeat: -1, repeatDelay: 0.4, yoyo: true });

		gsap.fromTo(btn.icon.current, 0.7, { y: 0 }, { y: 5, repeat: -1, repeatDelay: 0.4, yoyo: true });
	}, [btn]);

	return (
		<button className="scroll-btn scroll-btn--next" onClick={() => scrollToNextSect(nextSectSelector)}>
			<div className="scroll-btn__icon" ref={btn.icon}>
				<img src={angleTop} alt="" />
			</div>
			<div className="scroll-btn__dot" ref={btn.dot}></div>
			<div className="scroll-btn__text">
				scroll down
				<div className="scroll-btn__text-overlay" ref={btn.text}>
					scroll down
				</div>
			</div>
		</button>
	);
}
