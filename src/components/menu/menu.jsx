import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { gsap, TweenLite } from 'gsap';

import './menu.sass';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			menu: [
				{
					link: '#',
					text: 'Home'
				},
				{
					link: '#',
					text: 'About me'
				},
				{
					link: '#',
					text: 'Projects'
				},
				{
					link: '#',
					text: 'Contacts'
				}
			]
		}
	}

	render() {
		const showMenu = this.props.showMenu;
		
		return (
			<Transition
				className="menu"
				timeout={3000}
				in={showMenu}
				onEnter={(node) => {
					TweenLite.staggerFromTo(node.querySelectorAll('.menu__item'), 1.2,
						{ y: 100, opacity: 0, ease: 'expo.in' },
						{ y: 0, opacity: 1, ease: 'expo.out', delay: 1 }, 0.15
					);
					gsap.fromTo(node.querySelector('.menu__hovered'), 1.2,
						{ x: '-50%', y: '-20%', opacity: 0 },
						{ x: '-50%', y: '-60%', opacity: .15, ease: 'expo.out', delay: 1.6 }
					);
				}}
				addEndListener={(node, done) => {
					gsap.to(node, 1.2, {
						x: showMenu ? 0 : '100%',
						ease: "power4.inOut",
						onComplete: done
					});
				}}
			>
				<div>
					<ul className="menu__list">
						{this.state.menu.map((item, index) => (
							<li key={index} className="menu__item">
								<a href={item.link} className="menu__link">{item.text}</a>
							</li>
						))}
					</ul>

					<div className="menu__hovered">Home</div>
				</div>
			</Transition>
		)
	}
}

Menu.propTypes = {

}

const mapStateToProps = state => {
	return {
		showMenu: state.showMenu,
	};
};

export default connect(mapStateToProps)(Menu);