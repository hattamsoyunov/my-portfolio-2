import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from './../../actions';
// import PropTypes from 'prop-types'

import './right-bar.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTelegramPlane,
	faSkype,
	faInstagram,
	faYoutube,
	faGithub
} from '@fortawesome/free-brands-svg-icons';

function RightBar({ showMenu, toggleMenu }) {
	return (
		<div className="right-bar">
			<button
				className={`hamburger hamburger--slider${showMenu ? ' is-active' : ''}`}
				onClick={toggleMenu}
			>
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>

			<div className="section-indicator" style={{opacity: showMenu ? '0' : '1'}}>
				<ul className="section-indicator__list">
					<li className="section-indicator__item">Home</li>
					<li className="section-indicator__item">Skills</li>
					<li className="section-indicator__item">Work Experience</li>
					<li className="section-indicator__item">Recently Projects</li>
				</ul>
			</div>

			<div className="socs">
				<ul className="socs__list">
					<li className="socs__item">
						<a href="/" className="socs__link">
							<FontAwesomeIcon icon={faSkype} />
						</a>
					</li>
					<li className="socs__item">
						<a href="/" className="socs__link">
							<FontAwesomeIcon icon={faTelegramPlane} />
						</a>
					</li>
					<li className="socs__item">
						<a href="/" className="socs__link">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</li>
					<li className="socs__item">
						<a href="/" className="socs__link">
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</li>
					<li className="socs__item">
						<a href="/" className="socs__link">
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
};

RightBar.propTypes = {

};

const mapStateToProps = state => {
	return {
		showMenu: state.showMenu,
	};
};

export default connect(mapStateToProps, { toggleMenu })(RightBar);