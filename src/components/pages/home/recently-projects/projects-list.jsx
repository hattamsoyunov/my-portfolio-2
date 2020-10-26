import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ProjectCard from './project-card';
import LoadMore from './load-more';

class ProjectsList extends Component {
	constructor(props) {
		super(props);

		this.projectsContainer = React.createRef();
	}

	componentDidMount() {
		this.setOffsets();
	}

	componentDidUpdate() {
		this.setOffsets();
	}

	setOffsets() {
		const items = this.projectsContainer.current.querySelectorAll('.recently-projects__col');
		let n = 3;

		for (let i = 0; i < items.length; i++) {
			if (i + 1 === n) {
				items[i].classList.add('recently-projects__col--offset');

				if (items[i + 1] !== undefined) {
					items[i + 1].classList.add('recently-projects__col--offset');
				}

				n += 4;
			}
		}
	}

	render() {
		const { projects, limit } = this.props;
		const loadMore = limit < projects.length ? <LoadMore /> : null;

		return (
			<Fragment>
				<div className="recently-projects__row" ref={this.projectsContainer}>
					{projects.slice(0, limit).map(({ id, title, toolsList, slug, preview }, index) => (
						<ProjectCard
							key={id}
							index={index + 1 <= 9 ? `0${index + 1}` : index + 1}
							slug={slug}
							toolsList={toolsList}
							preview={preview}
							title={title}
						/>
					))}
				</div>

				{loadMore}
			</Fragment>
		);
	}
}

LoadMore.propTypes = {
	projects: PropTypes.any,
	limit: PropTypes.number
};

export default ProjectsList;
