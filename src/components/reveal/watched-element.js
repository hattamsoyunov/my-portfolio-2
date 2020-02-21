import React, { useRef } from 'react';
import { useScrollState } from 'scrollmonitor-hooks';
import { connect } from 'react-redux';

const WatchedElement = ({ children, className, tl, pageIsLoaded }) => {
	const ref = useRef(null);
	const scrollState = useScrollState(ref, -70);

	if (pageIsLoaded && scrollState.isInViewport) {
		tl.play();
	}
	// console.log(disabled);

	// if (!scrollState.isInViewport) {
	// tl.seek(0);
	// tl.reverse();
	// }

	return (
		<div className={className} ref={ref}>
			{children}
		</div>
	);
};

WatchedElement.defaultProps = {
	className: null,
	tl: null
};

const mapStateToProps = ({ pageIsLoaded }) => {
	return { pageIsLoaded };
};

export default connect(mapStateToProps, null)(WatchedElement);
