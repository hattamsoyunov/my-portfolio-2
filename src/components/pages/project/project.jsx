import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { projectsRequested, projectsLoaded, projectsError } from 'actions';
import withProjectService from 'components/hoc/with-project-service';

import './project.sass';

import ProjectMain from './project-main';
import ProjectAddImgs from './project-add-imgs';
import ProjectMobileAddImgs from './project-add-mobile-imgs';
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';

class Project extends Component {
	constructor({ props, match, projects, projectsReady }) {
		super(props);
		this.slug = match.params.slug;

		this.state = {
			project: projectsReady ? this.getProject(projects) : null
		};
	}

	componentDidMount() {
		const { projectsReady, projectService, projectsRequested, projectsLoaded, projectsError } = this.props;

		if (!projectsReady) {
			projectsRequested();
			projectService
				.getProjects()
				.then(body => {
					projectsLoaded(body);
					this.setState({ project: this.getProject(body) });
				})
				.catch(error => {
					projectsError(error);
				});
		}

		window.scrollTo(0, 0);
	}

	getProject(projects) {
		return projects.find(project => project.slug === this.slug);

		// if (project !== undefined) {
		// 	return project;
		// } else {
		// 	console.log('yalnysh adress');
		// 	<Redirect to="/" />;
		// }
	}

	render() {
		const { projectsReady, loading, error } = this.props;

		const spinner = !projectsReady & loading ? <Spinner /> : null;
		const errorIndicator = error ? <ErrorIndicator /> : null;
		const content =
			projectsReady & !loading & !error & (this.state.project !== null) ? (
				<ProjectContent project={this.state.project} />
			) : null;

		return (
			<main className="project-page page-layout">
				{spinner}
				{errorIndicator}
				{content}
			</main>
		);
	}
}

Project.propTypes = {
	projects: PropTypes.array.isRequired,
	projectsReady: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
	projectsRequested: PropTypes.func.isRequired,
	projectsLoaded: PropTypes.func.isRequired,
	projectsError: PropTypes.func.isRequired
};

const ProjectContent = ({ project }) => {
	if (project === undefined) {
		return <Redirect to="/404" />;
	}

	return (
		<Fragment>
			<ProjectMain project={project} />
			<ProjectAddImgs project={project} />
			<ProjectMobileAddImgs project={project} />
		</Fragment>
	);
};

const mapStateToProps = ({ projects, projectsReady, loading, error }) => {
	return {
		projects,
		projectsReady,
		loading,
		error
	};
};

export default withProjectService()(
	connect(mapStateToProps, {
		projectsRequested,
		projectsLoaded,
		projectsError
	})(Project)
);
