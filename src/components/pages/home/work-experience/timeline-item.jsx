import React from 'react';
import PropTypes from 'prop-types';

import AnimElement from 'components/anim-elements';

function TimelineItem({ date, title, company, isStart, isLast }) {
	return (
		<AnimElement className="timeline-item">
			<div className="timeline-item__date">{date}</div>
			<h3 className="timeline-item__title">{title}</h3>
			<div className="timeline-item__company">{company}</div>

			{isStart ? (
				<div>
					<div className="timeline-item__start-dot"></div>
					<div className="timeline-item__start-line"></div>
				</div>
			) : (
				''
			)}
			{isLast ? <div className="timeline-item__last-line"></div> : ''}
		</AnimElement>
	);
}

TimelineItem.propTypes = {
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired
};

export default TimelineItem;
