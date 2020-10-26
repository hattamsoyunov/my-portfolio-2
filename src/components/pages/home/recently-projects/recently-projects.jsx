import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { projectsRequested, projectsLoaded, projectsError } from 'actions';

import ProjectsList from './projects-list';
import withProjectService from 'components/hoc/with-project-service';
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';

import './recently-projects.sass';

class RecentlyProjects extends Component {
	componentDidMount() {
		const { projectsReady, projectService, projectsRequested, projectsLoaded, projectsError } = this.props;

		if (!projectsReady) {
			projectsRequested();
			projectService
				.getProjects()
				.then(body => {
					projectsLoaded(body);
				})
				.catch(error => {
					projectsError(error);
				});
		}
	}

	render() {
		const { projects, loading, error, limit } = this.props;
		const spinner = loading ? <Spinner /> : null;
		const errorIndicator = error ? <ErrorIndicator /> : null;
		const projectsList = !loading && !error ? <ProjectsList projects={projects} limit={limit} /> : null;

		return (
			<section id="recently-projects" className="recently-projects">
				<div className="container">
					<h2 className="recently-projects__title" data-title="Recently Projects">
						Recently Projects
					</h2>

					{spinner}
					{errorIndicator}
					{projectsList}
				</div>
			</section>
		);
	}
}

RecentlyProjects.propTypes = {
	projects: PropTypes.array.isRequired,
	projectsReady: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
	limit: PropTypes.number.isRequired,
	projectsRequested: PropTypes.func.isRequired,
	projectsLoaded: PropTypes.func.isRequired,
	projectsError: PropTypes.func.isRequired
};

const mapStateToProps = ({ projects, projectsReady, loading, error, limit }) => {
	return {
		projects,
		projectsReady,
		loading,
		error,
		limit
	};
};

export default withProjectService()(
	connect(mapStateToProps, {
		projectsRequested,
		projectsLoaded,
		projectsError
	})(RecentlyProjects)
);
