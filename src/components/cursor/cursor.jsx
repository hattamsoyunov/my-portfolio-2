import React from 'react';
import gsap from 'gsap';

import './cursor.sass'

class Cursor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mouseIsHover: false
		}

		this.cursor = React.createRef();
		this.follower = React.createRef();
		
		this.cursorHoverElems = 'a, button, .hamburger';
	}
	
	componentDidMount() {
		// set the starting position of the cursor outside of the screen
		let circlePos = { x: 0, y: 0 };
		let mousePos = { x: 0, y: 0 };

		gsap.to({}, 0.01, {
			repeat: -1,
			onRepeat: () => {
				circlePos.x += (mousePos.x - circlePos.x) / 5;
				circlePos.y += (mousePos.y - circlePos.y) / 5;

				gsap.set(this.follower.current, {
					x: circlePos.x,
					y: circlePos.y
				});
				
				gsap.to(this.follower.current, .4, {
					scale: this.state.mouseIsHover ? 1.9 : 1
				});

				gsap.set(this.cursor.current, {
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

		// add listener to track the current mouse hover
		document.addEventListener('mousemove', (e) => {
			if (e.target.closest(this.cursorHoverElems)) {
				this.setState({ mouseIsHover: true });
			} else {
				this.setState({ mouseIsHover: false });
			}
		});
	}

	render() {
		return (
			<div className="cursor">
				<div className="cursor__dot" ref={this.cursor}></div>
				<div className="cursor__circle" ref={this.follower}></div>
			</div>
		);
	}
};

export default Cursor;