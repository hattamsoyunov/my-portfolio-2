import React from 'react'
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import VanillaTilt from 'vanilla-tilt';

import ProjectCard from './project-card';

import './recently-projects.sass'
import projects from 'data/projects';
import arrowRight from 'img/icons/arrow_right.svg';

class RecentlyProjects extends React.Component {
	constructor({props, limit, step}) {
		super(props);
		
		this.state = {
			projects,
			limit,
			step
		};

		this.handleLoadMore = this.handleLoadMore.bind(this);

		this.projectsContainer = React.createRef();
	}

	setOffsets() {
		const items = this.projectsContainer.current.querySelectorAll('.recently-projects__col');
		let n = 3;

		for (let i = 0; i < items.length; i++) {
			
			if( i+1 === n) {
				items[i].classList.add('recently-projects__col--offset');
				
				if (items[i+1] !== undefined) {
					items[i+1].classList.add('recently-projects__col--offset');
				}
				
				n += 4;
			}
		};
	}

	perspectiveCard() {
		var cards = this.projectsContainer.current.querySelectorAll('.project-item');

		VanillaTilt.init(cards, {
			max: 8,
			speed: 2000,
			glare: true,
			"max-glare": .15,
		});
	}

	componentDidUpdate() {
		this.setOffsets();
		this.perspectiveCard();
	}

	componentDidMount() {
		this.setOffsets();
		this.perspectiveCard();
	}

	handleLoadMore() {
		this.setState({ limit: this.state.limit + this.state.step });
	}

	render() {
		return (
			<section className="recently-projects">
				<div className="container">
					<h2 className="recently-projects__title" data-title="Recently Projects">Recently Projects</h2>

					<div className="recently-projects__row" ref={this.projectsContainer}>
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

					<div className="recently-projects__bottom">
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