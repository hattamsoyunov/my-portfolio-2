import React, { Component } from 'react';

import './project.sass';

import projects from 'data/projects.js';
import ProjectMain from './project-main';
import ProjectAddImgs from './project-add-imgs';
import ProjectMobileAddImgs from './project-add-mobile-imgs';

class Project extends Component {
	constructor({ props, match }) {
		super(props);

		this.project = projects.find(project => project.slug === match.params.slug);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<main className="project-page page-layout">
				<ProjectMain project={this.project} />
				<ProjectAddImgs project={this.project} />
				<ProjectMobileAddImgs project={this.project} />
			</main>
		);
	}
}

export default Project;
