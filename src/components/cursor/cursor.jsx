import React from 'react';
// import PropTypes from 'prop-types';

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
		let clientX = -100;
		let clientY = -100;
		const cursor = document.querySelector('.cursor');
		const circle = document.querySelector('.cursor__circle');
		const hoverElems = document.querySelectorAll('a, button, .hamburger');
		

		const initCursor = () => {
			// add listener to track the current mouse position
			document.addEventListener("mousemove", e => {
				clientX = e.clientX;
				clientY = e.clientY;
			});
			
			// add listener to track the current mouse hovers
			hoverElems.forEach((el) => {
				el.addEventListener("mouseenter", e => {
					this.setState({ mouseIsHover: true })
				});
			});
			hoverElems.forEach((el) => {
				el.addEventListener("mouseleave", e => {
					this.setState({ mouseIsHover: false })
				});
			});
			
			const render = () => {
				cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
				circle.style.transform = `scale(${this.state.mouseIsHover ? 1.6 : 1})`;
				circle.style.borderWidth = `${this.state.mouseIsHover ? '1px' : '2px'}`;
				
				requestAnimationFrame(render);
			};
			requestAnimationFrame(render);
		};

		initCursor();
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