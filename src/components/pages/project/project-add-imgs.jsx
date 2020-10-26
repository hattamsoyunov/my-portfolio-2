import React from 'react';
import PropTypes from 'prop-types';

import './project-add-imgs.sass';

function ProjectAddImgs(props) {
	const images = [];

	for (let i = 0; i < props.project.addImagesQty; i++) {
		images.push(
			<div key={i} className="project-add-imgs__img">
				<img
					src={`../images/projects/${props.project.slug}/add_img_${i + 1}.jpg`}
					alt=""
					onLoad={e => (e.currentTarget.style.opacity = 1)}
				/>
			</div>
		);
	}

	return props.project.addImagesQty > 0 ? (
		<section className="project-add-imgs">
			<div className="container">{images}</div>
		</section>
	) : (
		false
	);
}

ProjectAddImgs.propTypes = {
	project: PropTypes.shape({
		addImagesQty: PropTypes.number.isRequired
	})
};

export default ProjectAddImgs;
