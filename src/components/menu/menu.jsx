import React from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import { gsap, TweenLite } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { withRouter } from 'react-router';
import store from 'store';
import { toggleMenu } from './../../actions';

import './menu.sass';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

// import MenuLink from './menu-link';

class Menu extends React.Component {
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
		}

		this.goToSect = this.goToSect.bind(this);

		this.hoverItemText = React.createRef();
		this.menuList = React.createRef();
	}

	goToSect(e) {
		e.preventDefault();
		const sect = e.currentTarget.getAttribute('href').replace('#', '.');

		this.props.toggleMenu();

		setTimeout(() => {
			gsap.to(window, 1, { scrollTo: store.getState().mainSections.current.querySelector(sect).offsetTop, ease: 'expo.out' });
		}, 500);
	}

	componentDidMount() {
		const items = this.menuList.current.querySelectorAll('.menu__link');
		const hoveredText = this.hoverItemText.current;

		items.forEach((el) => {
			el.addEventListener('mouseenter', (e) => {
				if (hoveredText.innerHTML !== e.target.innerHTML) {
					hoveredText.innerHTML = e.target.innerHTML;
					gsap.fromTo(hoveredText, .6, { y: '-55%', opacity: 0 }, { y: '-60%', opacity: .15 });
				}
			})
		});
	}

	shouldComponentUpdate() {
		let activeItem = this.state.menu.filter(item => item.link === this.props.location.pathname);
		let activeItemText = activeItem.length === 0 ? "Home" : activeItem[0].text;
		
		setTimeout(() => {
			this.hoverItemText.current.innerHTML = activeItemText;
		}, 600);
		
		return true;
	}

	render() {
		const showMenu = this.props.showMenu;
		
		return (
			<Transition
				className="menu"
				timeout={3000}
				in={showMenu}
				onEnter={(node) => {
					TweenLite.staggerFromTo(node.querySelectorAll('.menu__item'), 1,
						{ y: 100, opacity: 0, ease: 'expo.in' },
						{ y: 0, opacity: 1, ease: 'expo.out', delay: .8 }, 0.15
					);
					gsap.fromTo(node.querySelector('.menu__hovered'), 1,
						{ x: '-50%', y: '-20%', opacity: 0 },
						{ x: '-50%', y: '-60%', opacity: .15, ease: 'expo.out', delay: 1.4 }
					);
				}}
				addEndListener={(node, done) => {
					gsap.to(node, 1, {
						x: showMenu ? 0 : '100%',
						ease: "power4.inOut",
						onComplete: done
					});
					
				}}
			>
				<div>
					<ul className="menu__list" ref={this.menuList}>
						{this.state.menu.map(({ link, text}, index) => (
							<li key={index} className="menu__item">
								{/* <MenuLink exact={ index === 0 ? true : false} to={link}>
									{text}
								</MenuLink> */}
								<a
									href={link}
									className="menu__link"
									onClick={this.goToSect}
								>
									{text}
								</a>
							</li>
						))}
					</ul>

					<div className="menu__hovered" ref={this.hoverItemText}>
						{/* {this.state.activeItemText} */}
					</div>
				</div>
			</Transition>
		)
	}
}

const mapStateToProps = state => {
	return {
		showMenu: state.showMenu,
	};
};

export default connect(mapStateToProps, { toggleMenu })(withRouter(Menu));