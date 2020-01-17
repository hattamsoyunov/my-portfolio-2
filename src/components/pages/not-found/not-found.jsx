import React from 'react';
import { Link } from 'react-router-dom';

import './not-found.sass';

export default function NotFound() {
	return (
		<section className="not-found">
			<div className="contaner">
				<div className="row not-found__row">
					<div className="col-12">
						<h1 className="not-found__title">404</h1>
						<div className="not-found__desc">Страница не найдена</div>

						<Link to="/" className="button" data-wow-delay=".3s">
							Главная
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
