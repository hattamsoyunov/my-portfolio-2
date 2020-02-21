import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import gsap from 'gsap';
import { is404Page } from 'actions';

import './not-found.sass';
import arrowLeft from 'img/icons/arrow_left.svg';

function NotFound(props) {
	const { is404Page } = props;
	const letter1 = useRef(null);
	const letter2 = useRef(null);
	const letter3 = useRef(null);
	const emoji = useRef(null);

	const tl = gsap.timeline();
	const ease = { ease: 'power4.out' };

	useEffect(() => {
		is404Page();
	}, [is404Page]);

	useEffect(() => {
		tl.to(letter1.current, 0.6, { x: -82, y: -89, rotation: -154, ...ease });
		tl.to(letter2.current, 0.6, { y: -80, rotation: 90, ...ease }, '-=0.6');
		tl.to(letter3.current, 0.6, { x: 82, y: -89, rotation: 154, ...ease }, '-=0.6');
		tl.to(emoji.current, 0.01, { y: -28 }, '-=0.6');

		tl.reverse();
		return () => {
			tl.seek(0);
		};
	}, [tl, ease]);

	const handleMouseEnter = () => {
		tl.play();
	};
	const handleMouseLeave = () => {
		tl.reverse();
	};

	return (
		<main className="main-page">
			<section className="not-found">
				<div className="container">
					<div className="row not-found__row">
						<div className="col-12">
							<h1 className="not-found__title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
								<div ref={letter1}>4</div>
								<div ref={letter2}>0</div>
								<div ref={letter3}>4</div>
							</h1>
							<div className="not-found__desc">
								Oops! Page not found
								<div className="not-found__emoji">
									<div className="not-found__emoji-inner" ref={emoji}>
										<span role="img" aria-label="">
											😕
										</span>
										<span role="img" aria-label="">
											😲
										</span>
									</div>
								</div>
							</div>

							<Link to="/" className="btn not-found__btn">
								<ReactSVG src={arrowLeft} className="icon icon--left not-found__icon" />
								<span>Go to home</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default connect(null, { is404Page })(NotFound);
