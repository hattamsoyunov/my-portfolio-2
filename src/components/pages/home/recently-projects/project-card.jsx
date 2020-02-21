import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import VanillaTilt from 'vanilla-tilt';
import Colors from 'components/colors';
import Reveal from 'components/reveal';

import arrowRight from 'img/icons/arrow_right.svg';

import './project-card.sass';

function ProjectImg({ slug }) {
	return (
		<div className="project-item__img">
			<img src={`images/projects/${slug}/preview.jpg`} alt="" onLoad={e => (e.currentTarget.style.opacity = 1)} />
		</div>
	);
}

function ProjectCard({ index, title, toolsList, slug, projectsAnimDisabled }) {
	const projectItem = useRef(null);

	useEffect(() => {
		const card = projectItem.current;

		if (window.outerWidth > 1024) {
			VanillaTilt.init(card, {
				max: 8,
				speed: 2000,
				glare: true,
				scale: 1.04,
				'max-glare': 0.15
			});

			return () => {
				card.vanillaTilt.destroy();
			};
		}
	}, [projectItem]);

	const projectImg = projectsAnimDisabled ? (
		<ProjectImg slug={slug} />
	) : (
		<Reveal delay={0} color={Colors.c2}>
			<ProjectImg slug={slug} />
		</Reveal>
	);

	return (
		<div className="recently-projects__col">
			<Link to={`/projects/${slug}`} className="project-item" ref={projectItem}>
				{projectImg}

				<div className="project-item__info">
					<h3 className="project-item__title">
						<span>“{title}”</span>
						<div className="project-item__index">{index}</div>
					</h3>

					<ul className="project-item__tools">
						{toolsList.slice(0, 4).map((tool, index) => (
							<li key={index} className="project-item__tool-item">
								{tool}
							</li>
						))}
					</ul>

					<div className="btn project-item__btn">
						<ReactSVG src={arrowRight} className="icon icon--arrow-right" />
					</div>
				</div>
			</Link>
		</div>
	);
}

ProjectCard.propTypes = {
	index: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	toolsList: PropTypes.array.isRequired,
	slug: PropTypes.string.isRequired
};

const mapStateToProps = ({ projectsAnimDisabled }) => {
	return {
		projectsAnimDisabled
	};
};

export default connect(mapStateToProps, null)(ProjectCard);
