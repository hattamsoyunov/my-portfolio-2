import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import arrowRight from 'img/icons/arrow_right.svg';

function ProjectCard({ index, title, toolsList, slug, preview }) {
	return (
		<div className="recently-projects__col">
			<div className="project-item">
				<div className="project-item__img">
					<img
						src={`images/projects/${slug}/preview.jpg`}
						alt=""
						onLoad={(e) => e.currentTarget.style.opacity = 1}
					/>
				</div>
				<div className="project-item__info">
					<h3 className="project-item__title">
						<span>“{title}”</span>
						<div className="project-item__index">{index}</div>
					</h3>
					<ul className="project-item__tools">
						{toolsList.slice(0, 4).map((tool, index) => <li key={index} className="project-item__tool-item">{tool}</li> )}
					</ul>
					<Link to={`/projects/${slug}`} className="btn project-item__btn">
						<ReactSVG
							src={arrowRight}
							className='icon'
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

ProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	toolsList: PropTypes.array.isRequired,
	slug: PropTypes.string.isRequired,
}

export default ProjectCard;