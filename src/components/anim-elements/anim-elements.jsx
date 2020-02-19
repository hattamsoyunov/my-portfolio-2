import React, { useRef } from 'react';
import { useScrollState } from 'scrollmonitor-hooks';
import { useState } from 'react';

// Default state
let toggleClass = 'init';

function AnimElement({ children, className }) {
	const once = true; // Animation Repeat
	const [animIn, setAnimIn] = useState(true);
	const [animOut, setAnimOut] = useState(true);

	const ref = useRef(null);
	const scrollState = useScrollState(ref, -70);

	if (scrollState.isInViewport && animIn) {
		toggleClass = 'init in';
		if (once) {
			setAnimIn(false);
		}
	}

	if (!scrollState.isInViewport && animOut) {
		toggleClass = 'init out';
		if (once) {
			setAnimOut(false);
		}
	}

	return (
		<div className={`${className} ${toggleClass}`} ref={ref}>
			{children}
		</div>
	);
}

AnimElement.defaultProps = {
	className: ''
};

export default AnimElement;
