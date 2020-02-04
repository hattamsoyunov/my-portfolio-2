import React from 'react';

import './about.sass';

function About(props) {
	return (
		<section id="about" className="about">
			<div className="container">
				<h2 className="about__title" data-title="About me">
					About me
				</h2>

				<div className="about__content">
					<p>
						My name is <strong>Hatam</strong>! I’ve been doing over 4 years
						experience in Front-end Development and over 6 years in Web
						development in General. During all this time I managed to work in
						several web studios and freelance, gained a lot of experience, the
						last place I worked as a web studio "Lained" in the position of
						"Head of front-end development department".
					</p>

					<h4>
						<span role="img" aria-label="">
							💪
						</span>{' '}
						My Skills:
					</h4>
					<ul>
						<li>Over 6 years in Web development in General.</li>
						<li>
							Building complex functional, beautiful, UI/UX and responsive
							websites.
						</li>
						<li>
							Building <strong>react web apps.</strong>
						</li>
						<li>React.js development (Redux, Hooks).</li>
						<li>Advanced HTML/CSS/JS.</li>
						<li>Use HTML preprocessors (template engine) - PUG.</li>
						<li>Use CSS preprocessors - SASS.</li>
						<li>
							Compile the standart websites using my gulp builder -{' '}
							<a href="https://github.com/hattamsoyunov/start_dev">start_dev</a>
							.
						</li>
						<li>PSD/Figma/Adobe XD to html website (or Modx Revo website).</li>
						<li>
							BEM system, clean code with semantic classes and comments so that
							in the future any other web developer can easily understand the
							code.
						</li>
					</ul>

					<h4>
						Why should you work with me? <br /> I guarantee:
					</h4>
					<ul>
						<li>Fast and professional work.</li>
						<li>Perform your project in a great way.</li>
						<li>
							<strong>Attention to details.</strong>
						</li>
						<li>Perfectionism.</li>
						<li>I'm ambitious and love new challenges :)</li>
					</ul>

					<p>
						My principle <strong>“Quality is always comes first”</strong>.
					</p>

					<h4>
						<span role="img" aria-label="">
							🎯
						</span>{' '}
						My goal
					</h4>
					<p>
						Become a professional front-end developer{' '}
						<span role="img" aria-label="">
							😎
						</span>
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
