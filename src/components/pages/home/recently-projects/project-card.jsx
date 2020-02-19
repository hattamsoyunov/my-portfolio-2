import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import VanillaTilt from 'vanilla-tilt';
import Colors from 'components/colors';
import Reveal from 'components/reveal';

import arrowRight from 'img/icons/arrow_right.svg';

function ProjectCard({ index, title, toolsList, slug }) {
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

	return (
		<div className="recently-projects__col">
			<div className="project-item" ref={projectItem}>
				<Reveal delay={0} color={Colors.c2}>
					<div className="project-item__img">
						<img src={`images/projects/${slug}/preview.jpg`} alt="" onLoad={e => (e.currentTarget.style.opacity = 1)} />
					</div>
				</Reveal>

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

					<Link to={`/projects/${slug}`} className="btn project-item__btn">
						<ReactSVG src={arrowRight} className="icon icon--arrow-right" />
					</Link>
				</div>
			</div>
		</div>
	);
}

ProjectCard.propTypes = {
	index: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	toolsList: PropTypes.array.isRequired,
	slug: PropTypes.string.isRequired
};

export default ProjectCard;
