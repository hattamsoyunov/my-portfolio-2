import React, { useState, useEffect } from 'react';
import WorkExperienceService from 'services/work-experience-service';

import TimelineItem from './timeline-item';

import './work-experience.sass';
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';

const workExperienceService = new WorkExperienceService();

function TimelineItemsList({ workExperiences }) {
	return (
		<div className="timeline">
			{workExperiences.map(({ date, title, company }, index) => (
				<TimelineItem
					key={index}
					isStart={index === workExperiences.length - 1}
					isLast={index === 0}
					date={date}
					title={title}
					company={company}
				/>
			))}
		</div>
	);
}

function WorkExperience(props) {
	const [workExperiences, setWorkExperiences] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		workExperienceService
			.getWorkExperiences()
			.then(body => {
				setWorkExperiences(body);
				setLoading(false);
			})
			.catch(error => {
				setError(error);
				setLoading(false);
			});
	}, [setWorkExperiences, setLoading, setError]);

	const spinner = loading ? <Spinner /> : null;
	const errorIndicator = !loading && error ? <ErrorIndicator error={error} /> : null;
	const timelineItemsList = !loading && !error ? <TimelineItemsList workExperiences={workExperiences} /> : null;

	return (
		<section id="work-experience" className="work-experience">
			<div className="container work-experience__container">
				<h2 className="work-experience__title" data-title="Work Experience">
					Work Experience
				</h2>

				<div className="work-experience__row">
					{spinner}
					{errorIndicator}
					{timelineItemsList}
				</div>
			</div>
		</section>
	);
}

export default WorkExperience;
