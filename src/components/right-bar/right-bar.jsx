import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleMenu, setSectIndicators } from './../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTelegramPlane,
	faSkype,
	faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

import './right-bar.sass';

class RightBar extends React.Component {
	constructor(props) {
		super(props);
		
		this.indicators = React.createRef();
	}

	componentDidMount() {
		this.props.setSectIndicators(this.indicators.current);
	}
	
	render() {
		const { showMenu, toggleMenu } = this.props;

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

				<div className="section-indicator" style={{ opacity: showMenu || this.props.location.pathname !== '/' ? '0' : '1' }}>
					<ul className="section-indicator__list" ref={this.indicators}>
						<li sect-id="main" className="section-indicator__item">Home</li>
						<li sect-id="skills" className="section-indicator__item">Skills</li>
						<li sect-id="work-experience" className="section-indicator__item">Work Experience</li>
						<li sect-id="recently-projects" className="section-indicator__item">Recently Projects</li>
					</ul>
				</div>

				<div className="socs">
					<ul className="socs__list">
						<li className="socs__item">
							<a href="skype:hattam.soyunow" className="socs__link" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faSkype} />
							</a>
						</li>
						<li className="socs__item">
							<a href="https://tglink.ru/hatamsoyunow" className="socs__link" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faTelegramPlane} />
							</a>
						</li>
						<li className="socs__item">
							<a href="https://wa.me/79038774141" className="socs__link" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faWhatsapp} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
};

const mapStateToProps = state => {
	return {
		showMenu: state.showMenu
	};
};

export default connect(mapStateToProps, { toggleMenu, setSectIndicators })(withRouter(RightBar));