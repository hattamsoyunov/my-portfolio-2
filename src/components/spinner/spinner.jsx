import React from 'react';

import './spinner.sass';

export default function Spinner() {
	return (
		<div className="spinner-container">
			<div className="spinner__emoji">
				<span role="img" aria-label="">
					😉
				</span>
			</div>
			<div className="spinner">
				<div className="spinner__title">Loading</div>
				<div className="spinner__dots">
					<div className="spinner__dot"></div>
					<div className="spinner__dot"></div>
					<div className="spinner__dot"></div>
				</div>
			</div>
		</div>
	);
}
