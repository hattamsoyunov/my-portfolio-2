import React from 'react';

import Skill from './skill';
import './skills.sass'
import skills from './../../../../data/skills';
// import { TweenLite} from 'gsap/gsap-core';

class Skills extends React.Component {
	// constructor(props) {
	// 	super(props);

	// 	// this.itemsContainer = React.createRef();
	// }

	// componentDidMount() {

		// let isAnimated = false;

		// window.addEventListener('scroll', e => {
		// 	const elems = this.itemsContainer.current.querySelectorAll('.skills__col');
		// 	const scrollTop = document.querySelector('html').scrollTop;
		// 	const elScrollTop = this.itemsContainer.current.offsetTop - window.innerHeight + 100;

		// 	if (elScrollTop < scrollTop && !isAnimated) {
		// 		TweenLite.staggerTo(elems, 1, { y: 0, opacity: 1 }, .15, setTimeout(() => showProgress(this.itemsContainer.current), 1500))
		// 		isAnimated = true;
		// 		console.log('asda')
		// 	}
		// });

		// function showProgress(elems) {
		// 	const progresses = elems.querySelectorAll('.progress__inner');

		// 	progresses.forEach(progress => {
		// 		progress.style.transform = `translateX(${progress.getAttribute('data-percent')}%)`
		// 	});
		// }
	// }
	
	render() {
		return (
			<section className="skills">
				<div className="container skills__container">
					<h2 className="skills__title" data-title="Skills">Skills</h2>

					<div className="skills__row"
						// ref={this.itemsContainer}
					>

						{skills.map(({ icon, percent }, index) => (
							<Skill key={index} icon={icon} percent={percent} />
						))}

					</div>
				</div>
			</section>
		)
	}
}

export default Skills;