import React from 'react';
// import PropTypes from 'prop-types';
import gsap from 'gsap';

import './cursor.sass'

// import Scrollbar from 'smooth-scrollbar';

class Cursor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mouseIsHover: false
		}
	}
	
	componentDidMount() {

		// const scrollbar = Scrollbar.init(document.querySelector('body'), {
		// 	damping: 0.05
		// });

		// scrollbar.addListener(function (e) {
		// 	console.log(e.offset.y);
		// });

		// set the starting position of the cursor outside of the screen
		let circlePos = { x: 0, y: 0 };
		let mousePos = { x: 0, y: 0 };
		const cursor = document.querySelector('.cursor__dot');
		const follower = document.querySelector('.cursor__circle');
		const hoverElems = document.querySelectorAll('a, button, .hamburger');

		gsap.to({}, 0.01, {
			repeat: -1,
			onRepeat: () => {
				circlePos.x += (mousePos.x - circlePos.x) / 5;
				circlePos.y += (mousePos.y - circlePos.y) / 5;

				gsap.set(follower, {
					x: circlePos.x,
					y: circlePos.y
				});
				
				gsap.to(follower, .4, {
					scale: this.state.mouseIsHover ? 1.9 : 1
				});

				gsap.set(cursor, {
					x: mousePos.x,
					y: mousePos.y
				});
			}
		});

		// add listener to track the current mouse position
		document.addEventListener('mousemove', e => {
			mousePos.x = e.clientX;
			mousePos.y = e.clientY;
		});

		// add listener to track the current mouse hovers
		hoverElems.forEach((el) => {
			el.addEventListener('mouseenter', () => {
				this.setState({ mouseIsHover: true })
			});
		});
		hoverElems.forEach((el) => {
			el.addEventListener('mouseleave', () => {
				this.setState({ mouseIsHover: false })
			});
		});
	}

	render() {
		return (
			<div className="cursor">
				<div className="cursor__dot"></div>
				<div className="cursor__circle"></div>
			</div>
		);
	}
};

Cursor.propTypes = {
	
};

export default Cursor;