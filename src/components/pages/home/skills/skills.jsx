import React, { useEffect, useState } from 'react';
import SkillsService from 'services/skills-service';

import './skills.sass';

import Skill from './skill';
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';

const skillsService = new SkillsService();

function SkillsList({ skills }) {
	return skills.map(({ icon, title, percent }, index) => (
		<Skill key={index} icon={icon} title={title} percent={percent} />
	));
}

function Skills() {
	const [skills, setSkills] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		skillsService
			.getSkills()
			.then(body => {
				setSkills(body);
				setLoading(false);
			})
			.catch(error => {
				setError(error);
				setLoading(false);
			});
	}, [setSkills, setLoading, setError]);

	const spinner = loading ? <Spinner /> : null;
	const errorIndicator = !loading && error ? <ErrorIndicator error={error} /> : null;
	const skillsList = !loading && !error ? <SkillsList skills={skills} /> : null;

	return (
		<section id="skills" className="skills">
			<div className="container skills__container">
				<h2 className="skills__title wow" data-title="Skills">
					Skills
				</h2>
				<div className="skills__row">
					{spinner}
					{errorIndicator}
					{skillsList}
				</div>
			</div>
		</section>
	);
}

export default Skills;
