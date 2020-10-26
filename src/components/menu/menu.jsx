import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import { gsap, TweenLite } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { withRouter } from 'react-router';
import store from 'store';
import { toggleMenu } from 'actions';

import './menu.sass';
import MenuLink from './menu-link';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menu: [
				{
					link: '#main',
					text: 'Home'
				},
				{
					link: '#about',
					text: 'About'
				},
				{
					link: '#skills',
					text: 'Skills'
				},
				{
					link: '#work-experience',
					text: 'Experience'
				},
				{
					link: '#recently-projects',
					text: 'Projects'
				},
				{
					link: '#contacts',
					text: 'Contacts'
				}
			]
		};

		this.handleGoToSect = this.handleGoToSect.bind(this);

		this.hoverItemText = React.createRef();
		this.menuList = React.createRef();
	}

	handleGoToSect(e) {
		e.preventDefault();
		const sect = e.currentTarget.getAttribute('href').replace('/', '');

		this.props.toggleMenu();

		setTimeout(() => {
			gsap.to(window, 1, {
				scrollTo: store.getState().mainSections.current.querySelector(sect)
					.offsetTop,
				ease: 'expo.out'
			});
		}, 500);
	}

	autoScrollToSectOnHash() {
		const prevLocation = this.props.location;
		const currentLocation = this.props.history.location;

		// Check the route direction: children page > home page and hash isn't empty
		if (
			prevLocation.pathname !== currentLocation.pathname &&
			currentLocation.hash !== ''
		) {
			// Animate scroll to sect
			setTimeout(() => {
				gsap.to(window, 1, {
					scrollTo: store
						.getState()
						.mainSections.current.querySelector(currentLocation.hash).offsetTop,
					ease: 'expo.out'
				});
			}, 500);
		}
	}

	componentDidMount() {
		const items = this.menuList.current.querySelectorAll('.menu__link');
		const hoveredText = this.hoverItemText.current;

		items.forEach(el => {
			el.addEventListener('mouseenter', e => {
				if (hoveredText.innerHTML !== e.target.innerHTML) {
					hoveredText.innerHTML = e.target.innerHTML;
					gsap.fromTo(
						hoveredText,
						0.6,
						{ y: '-55%', opacity: 0 },
						{ y: '-60%', opacity: 0.15 }
					);
				}
			});
		});

		this.autoScrollToSectOnHash();
	}

	shouldComponentUpdate() {
		let activeItem = this.state.menu.filter(
			item => item.link === this.props.location.pathname
		);
		let activeItemText = activeItem.length === 0 ? 'Home' : activeItem[0].text;

		setTimeout(() => {
			this.hoverItemText.current.innerHTML = activeItemText;
		}, 600);

		this.autoScrollToSectOnHash();

		return true;
	}

	render() {
		const showMenu = this.props.showMenu;
		const isHome = this.props.location.pathname === '/' ? true : false;

		return (
			<Transition
				className="menu"
				timeout={3000}
				in={showMenu}
				onEnter={node => {
					TweenLite.staggerFromTo(
						node.querySelectorAll('.menu__item'),
						0.6,
						{ y: 100, opacity: 0, ease: 'expo.in' },
						{ y: 0, opacity: 1, ease: 'expo.out', delay: 0.8 },
						0.1
					);
					gsap.fromTo(
						node.querySelector('.menu__hovered'),
						0.8,
						{ x: '-50%', y: '-20%', opacity: 0 },
						{
							x: '-50%',
							y: '-60%',
							opacity: 0.15,
							ease: 'expo.out',
							delay: 1.3
						}
					);
				}}
				addEndListener={(node, done) => {
					gsap.to(node, 1, {
						x: showMenu ? 0 : '100%',
						ease: 'power4.inOut',
						onComplete: done
					});
				}}
			>
				<div>
					<ul className="menu__list" ref={this.menuList}>
						{this.state.menu.map(({ link, text }, index) => (
							<li key={index} className="menu__item">
								<MenuLink
									to={link}
									isHome={isHome}
									className="menu__link"
									goToSect={this.handleGoToSect}
									toggleMenu={this.props.toggleMenu}
								>
									{text}
								</MenuLink>
							</li>
						))}
					</ul>

					<div className="menu__hovered" ref={this.hoverItemText}>
						{/* {this.state.activeItemText} */}
					</div>
				</div>
			</Transition>
		);
	}
}

const mapStateToProps = state => {
	return {
		showMenu: state.showMenu
	};
};

export default connect(mapStateToProps, { toggleMenu })(withRouter(Menu));
