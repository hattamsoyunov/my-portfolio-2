import React from 'react'
// import PropTypes from 'prop-types'

import TimelineItem from './timeline-item'

import './work-experience.sass'
import wExps from 'data/work-experience';

function WorkExperience(props) {
	return (
		<section className="work-experience">
			<div className="container">
				<h2 className="work-experience__title" data-title="Work Experience">Work Experience</h2>

				<div className="work-experience__row">

					<div className="timeline">
						{wExps.map(({ date, title, company}, index) => (
						
							<TimelineItem
								key={index}
								isStart={index === wExps.length - 1}
								isLast={index === 0}
								date={date}
								title={title}
								company={company}
							/>
						
						))}
					</div>

				</div>

			</div>
		</section>
	)
}

WorkExperience.propTypes = {

}

export default WorkExperience;