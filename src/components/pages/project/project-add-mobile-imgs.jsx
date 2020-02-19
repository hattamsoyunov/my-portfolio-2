import React from 'react';
import PropTypes from 'prop-types';

function ProjectAddMobileImgs(props) {
	const images = [];

	for (let i = 0; i < props.project.addMobileImagesQty; i++) {
		images.push(
			<div key={i} className="project-add-mobile-imgs__col">
				<div className="project-add-mobile-imgs__img">
					<img
						src={`../images/projects/${props.project.slug}/add_img_${props
							.project.addImagesQty +
							i +
							1}.jpg`}
						alt=""
						onLoad={e => (e.currentTarget.style.opacity = 1)}
					/>
				</div>
			</div>
		);
	}

	return props.project.addMobileImagesQty > 0 ? (
		<section className="project-add-mobile-imgs">
			<div className="container">
				<h2 className="project-add-mobile-imgs__title">Mobile optimization</h2>
				<div className="project-add-mobile-imgs__row">{images}</div>
			</div>
		</section>
	) : (
		false
	);
}

ProjectAddMobileImgs.propTypes = {
	project: PropTypes.shape({
		addImagesQty: PropTypes.number.isRequired,
		addMobileImagesQty: PropTypes.number.isRequired
	})
};

export default ProjectAddMobileImgs;
