import React from 'react'
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

import ProjectCard from './project-card';

import './recently-projects.sass'
import projects from 'data/projects';
import arrowRight from 'img/icons/arrow_right.svg';

class RecentlyProjects extends React.Component {
	constructor({limit, step}, props) {
		super(props);
		
		this.state = {
			projects: projects,
			limit: limit,
			step: step
		};

		this.handleLoadMore = this.handleLoadMore.bind(this);
	}

	handleLoadMore() {
		this.setState({ limit: this.state.limit + this.state.step });
	}

	render() {
		return (
			<section className="recently-projects">
				<div className="container">
					<h2 className="recently-projects__title" data-title="Recently Projects">Recently Projects</h2>

					<div className="recently-projects__row">
						{this.state.projects
						.slice(0, this.state.limit)
						.map(({ id, title, toolsList, slug, preview }, index) => (
							<ProjectCard
								key={id}
								index={(index+1) <= 9 ? `0${index+1}` : (index+1)}
								slug={slug}
								toolsList={toolsList}
								preview={preview}
								title={title}
							/>
						))}
					</div>

					<div className="recently-projects__row">
						{this.state.limit >= this.state.projects.length ? ('') : (
							<button
								className="btn recently-projects__btn"
								onClick={this.handleLoadMore}
							>
								<ReactSVG
									src={arrowRight}
									className='icon'
								/>
								<span>Load more</span>
							</button>
						)}
					</div>

				</div>
			</section>
		)
	}
}

RecentlyProjects.propTypes = {
	limit: PropTypes.number.isRequired,
	step: PropTypes.number.isRequired
}

export default RecentlyProjects;