import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTelegramPlane,
	faSkype,
	faInstagram,
	faYoutube,
	faGithub,
	faCodepen,
	faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

import './contacts.sass';

function Contacts() {
	return (
		<section id="contacts" className="contacts">
			<div className="container">
				<h2 className="contacts__title" data-title="Contacts">
					Contacts
				</h2>

				<div className="contacts__row">
					<h4 className="contacts__subtitle">Find me on:</h4>

					<ul className="contacts__list">
						<li className="contacts__item">
							<a
								href="skype:hattam.soyunow"
								className="contacts__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faSkype} />
							</a>
						</li>
						<li className="contacts__item">
							<a
								href="https://tglink.ru/hatamsoyunow"
								className="contacts__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faTelegramPlane} />
							</a>
						</li>
						<li className="contacts__item">
							<a
								href="https://wa.me/79038774141"
								className="contacts__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faWhatsapp} />
							</a>
						</li>
						<li className="contacts__item">
							<a
								href="https://www.instagram.com/hattam_webdeveloper/"
								className="contacts__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
						<li className="contacts__item">
							<a
								href="https://www.youtube.com/channel/UCeoeg2wncse37GJ84kCXkTg"
								className="contacts__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</li>
						<li className="contacts__item">
							<a
								href="https://github.com/hattamsoyunov/"
								className="contacts__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</li>
						<li className="contacts__item">
							<a
								href="https://codepen.io/hattam"
								className="contacts__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faCodepen} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Contacts;
