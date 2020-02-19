import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './error-indicator.sass';

export default function ErrorIndicator({ error }) {
	const emoji = useRef(null);
	const tl = gsap.timeline({ repeat: -1, repeatDelay: 8 });

	useEffect(() => {
		let x = [-82, -164];

		if (window.outerWidth < 1440) {
			x = [-69, -137];
		}

		tl.to(emoji.current, 0, { x: x[0], delay: 2 });
		tl.to(emoji.current, 0, { x: x[1], delay: 2 });

		tl.play();
	});

	console.log(error);

	return (
		<div className="error-indicator-container">
			<div className="error-indicator">
				<div className="error-indicator__emoji">
					<div className="error-indicator__emoji-inner" ref={emoji}>
						<span role="img" aria-label="">
							😲
						</span>
						<span role="img" aria-label="">
							😑
						</span>
						<span role="img" aria-label="">
							🙄
						</span>
					</div>
				</div>
				<h4 className="error-indicator__title">Oops!</h4>
				<div className="error-indicator__desc">Sorry, Something went wrong </div>
			</div>
		</div>
	);
}
