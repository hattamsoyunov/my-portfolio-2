import React, { Component } from 'react';
import store from 'store';
import gsap from 'gsap';
import { connect } from 'react-redux';

import { setMainSections } from 'actions';

import Main from './main';
import About from './about';
import Skills from './skills';
import WorkExperience from './work-experience';
import RecentlyProjects from './recently-projects';
import Contacts from './contacts';

class Home extends Component {
	constructor(props) {
		super(props);

		this.scrollListener = null;
		this.mainPageContainer = React.createRef();
	}

	componentDidMount() {
		let scrollY = 0;
		let centerOffset = 0;
		const nav = store.getState().sectIndicators;
		const items = nav.querySelectorAll('.section-indicator__item');

		this.scrollListener = () => {
			scrollY = window.scrollY;
			centerOffset = window.innerHeight / 2 - 100;

			items.forEach((item, index) => {
				let section = document.querySelector(`.${item.getAttribute('sect-id')}`);

				if (
					section.offsetTop - centerOffset <= scrollY &&
					section.offsetTop - centerOffset + section.offsetHeight > scrollY
				) {
					item.classList.add('current');
					gsap.set(nav, { y: -25 * index });
				} else {
					item.classList.remove('current');
				}
			});
		};

		window.addEventListener('scroll', this.scrollListener);

		this.props.setMainSections(this.mainPageContainer);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollListener);
	}

	render() {
		return (
			<main className="main-page" ref={this.mainPageContainer}>
				<Main />
				<About />
				<Skills />
				<WorkExperience />
				<RecentlyProjects />
				<Contacts />
			</main>
		);
	}
}

export default connect(null, { setMainSections })(Home);
