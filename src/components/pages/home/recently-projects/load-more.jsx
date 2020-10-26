import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import { connect } from 'react-redux';
import { projectsLoadMore } from 'actions';

import arrowRight from 'img/icons/arrow_right.svg';

function LoadMore(props) {
	const handleLoadMore = () => {
		const { projectsLoadMore, limit, step } = props;

		projectsLoadMore(limit + step);
	};

	return (
		<div className="recently-projects__bottom">
			<button className="btn recently-projects__btn" onClick={handleLoadMore}>
				<ReactSVG src={arrowRight} className="icon icon--arrow-right" />
				<span>Load more</span>
			</button>
		</div>
	);
}

LoadMore.propTypes = {
	limit: PropTypes.number.isRequired,
	step: PropTypes.number.isRequired
};

const mapStateToProps = ({ limit, step }) => {
	return { limit, step };
};

export default connect(mapStateToProps, { projectsLoadMore })(LoadMore);
