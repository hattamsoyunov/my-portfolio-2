import React from 'react';
import PropTypes from 'prop-types';

function Skill({ icon, title, percent }) {
	return (
		<div className="skills__col">
			<div className="skill-item">
				<div className="skill-item__img-wrap">
					<img src={icon} alt="" />
				</div>
				<div className="progress skill-item__progress">
					<div
						className="progress__inner"
						style={{ transform: `translateX(${percent}%` }}
					></div>
				</div>
				<div className="skill-item__title">{title}</div>
			</div>
		</div>
	);
}

Skill.propTypes = {
	icon: PropTypes.string.isRequired,
	percent: PropTypes.number.isRequired
};

export default Skill;
