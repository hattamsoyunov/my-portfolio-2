import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

import arrowRight from 'img/icons/arrow_right.svg';

function ProjectCard({ index, title, toolsList, slug, preview }) {
	return (
		<div className="recently-projects__col">
			<div className="project-item">
				<div className="project-item__img">
					<img src={preview} alt=""/>
				</div>
				<div className="project-item__info">
					<h3 className="project-item__title">
						{title}
						<div className="project-item__index">{index}</div>
					</h3>
					<ul className="project-item__tools">
						{toolsList.map(tool => <li className="project-item__tool-item">{tool}</li> )}
					</ul>
					<a href={slug} className="btn project-item__btn">
						<ReactSVG
							src={arrowRight}
							className='icon'
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

ProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	toolsList: PropTypes.array.isRequired,
	link: PropTypes.string.isRequired,
	preview: PropTypes.string.isRequired,
}

export default ProjectCard;