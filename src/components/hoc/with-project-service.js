import React from 'react';
import { ProjectServiceConsumer } from '../project-service-context';

const withProjectService = () => Wrapper => {
	return props => {
		return (
			<ProjectServiceConsumer>
				{projectService => {
					return <Wrapper {...props} projectService={projectService} />;
				}}
			</ProjectServiceConsumer>
		);
	};
};

export default withProjectService;
