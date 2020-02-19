import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import WatchedElement from './watched-element';
import Colors from 'components/colors';

import './reveal.sass';

function Reveal({ children, delay, color, direction }) {
	const tl = gsap.timeline({ paused: true });
	const el = useRef();
	const block = useRef();

	useEffect(() => {
		switch (direction) {
			// Left to Right
			case 'lr':
				tl.to(block.current, 0, { scaleX: 0, transformOrigin: 'left', background: color });
				tl.to(block.current, 0.4, { scaleX: 1, ease: 'power2.inOut', delay: delay });
				tl.to(el.current, 0, { alpha: 1 });
				tl.to(block.current, 0.4, { scaleX: 0, transformOrigin: 'right', ease: 'power2.inOut' }, '+=.3');
				break;

			// Rightto Left
			case 'rl':
				tl.to(block.current, 0, { scaleX: 0, transformOrigin: 'right', background: color });
				tl.to(block.current, 0.4, { scaleX: 1, ease: 'power2.inOut', delay: delay });
				tl.to(el.current, 0, { alpha: 1 });
				tl.to(block.current, 0.4, { scaleX: 0, transformOrigin: 'left', ease: 'power2.inOut' }, '+=.3');
				break;

			// Top to Bottom
			case 'tb':
				tl.to(block.current, 0, { scaleY: 0, transformOrigin: 'top', background: color });
				tl.to(block.current, 0.4, { scaleY: 1, ease: 'power2.inOut', delay: delay });
				tl.to(el.current, 0, { alpha: 1 });
				tl.to(block.current, 0.4, { scaleY: 0, transformOrigin: 'bottom', ease: 'power2.inOut' }, '+=.3');
				break;

			// Bottom to Top
			case 'bt':
				tl.to(block.current, 0, { scaleY: 0, transformOrigin: 'bottom', background: color });
				tl.to(block.current, 0.4, { scaleY: 1, ease: 'power2.inOut', delay: delay });
				tl.to(el.current, 0, { alpha: 1 });
				tl.to(block.current, 0.4, { scaleY: 0, transformOrigin: 'top', ease: 'power2.inOut' }, '+=.3');
				break;

			default:
				break;
		}

		return () => {
			tl.seek(0);
		};
	}, [tl, delay, color, direction]);

	return (
		<div className="block-reveal">
			<div className="block-reveal__element" ref={el}>
				<WatchedElement tl={tl}>{children}</WatchedElement>
			</div>
			<div className="block-reveal__block" ref={block}></div>
		</div>
	);
}

Reveal.defaultProps = {
	delay: 0.6,
	color: Colors.c1,
	direction: 'lr'
};

export default Reveal;
