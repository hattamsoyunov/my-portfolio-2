import React, { useRef } from 'react';
import { useScrollState } from 'scrollmonitor-hooks';
import { useState } from 'react';
import { connect } from 'react-redux';

// Default state
let toggleClass = 'init';

function AnimElement({ children, className, pageIsLoaded }) {
	const once = true; // Animation Repeat
	const [animOut, setAnimOut] = useState(true);

	const ref = useRef(null);
	const scrollState = useScrollState(ref, -70);

	if (pageIsLoaded && scrollState.isInViewport) {
		toggleClass = 'init in';
	}

	if (pageIsLoaded && !scrollState.isInViewport && animOut) {
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

const mapStateToProps = ({ pageIsLoaded }) => {
	return { pageIsLoaded };
};

export default connect(mapStateToProps, null)(AnimElement);
