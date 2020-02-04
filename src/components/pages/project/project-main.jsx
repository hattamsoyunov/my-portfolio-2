import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import VanillaTilt from 'vanilla-tilt';
import gsap from 'gsap';

import arrowRight from 'img/icons/arrow_right.svg';
import angleTop from 'img/icons/angle_top.svg';

class ProjectMain extends Component {
	constructor(props) {
		super(props);

		this.mainImg = React.createRef();
	}

	scrollNext() {
		gsap.to(window, 1.2, {
			scrollTo: window.innerHeight,
			ease: 'power3.inOut'
		});
	}

	perspectiveCard() {
		var mainImg = this.mainImg.current;

		VanillaTilt.init(mainImg, {
			max: 5,
			speed: 2000
		});
	}

	componentDidUpdate() {
		this.perspectiveCard();
	}

	componentDidMount() {
		this.perspectiveCard();
	}

	render() {
		const {
			title,
			types,
			desc,
			client,
			toolsList,
			link,
			slug,
			addImagesQty
		} = this.props.project;

		return (
			<section className="project">
				<div className="container">
					<div className="project__row">
						<div className="project__col">
							<div className="project__title">“{title}”</div>
							<div className="project__types">
								<ul>
									{types.map((type, index) => (
										<li key={index}>{type}</li>
									))}
								</ul>
							</div>
							<div className="project__desc">{desc}</div>

							<div className="project__item">
								<div className="project__item-title">Client</div>
								<div className="project__item-value">{client}</div>
							</div>

							<div className="project__item">
								<div className="project__item-title">Tools</div>
								<div className="project__item-value">
									<ul>
										{toolsList.map((tool, index) => (
											<li key={index}>{tool}</li>
										))}
									</ul>
								</div>
							</div>

							<a
								href={link}
								className="btn project__btn"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ReactSVG src={arrowRight} className="icon main__icon" />
								<span>Visit site</span>
							</a>
						</div>

						<div className="project__col">
							<div className="project__img" ref={this.mainImg}>
								<div className="project__img-main">
									<img
										src={`../images/projects/${slug}/main.jpg`}
										alt=""
										onLoad={e => (e.currentTarget.style.opacity = 1)}
									/>
								</div>
								<div className="project__img-mobile">
									<img
										src={`../images/projects/${slug}/mobile.jpg`}
										alt=""
										onLoad={e => {
											e.currentTarget.style.opacity = 1;
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					{addImagesQty > 0 ? (
						<button
							className="scroll-btn scroll-btn--next"
							onClick={this.scrollNext}
						>
							<div className="scroll-btn__icon">
								<img src={angleTop} alt="" />
							</div>
							<div className="scroll-btn__dot"></div>
							<div className="scroll-btn__text">scroll down</div>
						</button>
					) : (
						false
					)}
				</div>
			</section>
		);
	}
}

ProjectMain.propTypes = {
	project: PropTypes.shape({
		title: PropTypes.string.isRequired,
		types: PropTypes.arrayOf(PropTypes.string).isRequired,
		desc: PropTypes.string.isRequired,
		client: PropTypes.string,
		toolsList: PropTypes.arrayOf(PropTypes.string).isRequired,
		link: PropTypes.string,
		slug: PropTypes.string.isRequired
	})
};

export default ProjectMain;
