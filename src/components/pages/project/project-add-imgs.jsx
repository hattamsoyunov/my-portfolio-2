import React from 'react';
import PropTypes from 'prop-types';


function ProjectAddImgs(props) {
	const images = [];

	for (let i = 0; i < props.project.addImagesQty; i++) {
		images.push(
			<div key={i} className="project-add-imgs__img">
				<img
					src={`../images/projects/${props.project.slug}/add_img_${i + 1}.jpg`}
					alt=""
					onLoad={(e) => e.currentTarget.style.opacity = 1}
				/>
			</div>
		)
	}
	
	return (
		<section className="project-add-imgs">
			<div className="container">
				{images}
			</div>
		</section>
	)
}


ProjectAddImgs.propTypes = {
	project: PropTypes.shape({
		addImagesQty: PropTypes.number.isRequired
	})
};

export default ProjectAddImgs;