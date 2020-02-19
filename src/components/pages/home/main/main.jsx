import React, { useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';

import ScrollToNext from 'components/scroll-to-next';
import Reveal from 'components/reveal';
import Color from 'components/colors';

import './main.sass';
import imgLayer1 from 'img/main_img.jpg';
import imgLayer2 from 'img/main_img_layer.png';
import imgLayer3 from 'img/main_img_layer2.png';
import imgLayer4 from 'img/main_img_layer3.png';

function Main(props) {
	const mainImg = useRef(null);

	useEffect(() => {
		if (window.outerWidth > 1024) {
			VanillaTilt.init(mainImg.current, {
				max: 6,
				speed: 1500,
				glare: true,
				axis: 'x',
				'max-glare': 0.15
			});
		}
	});

	return (
		<section id="main" className="main">
			<div className="container">
				<div className="main__row">
					<div className="main__col">
						<h1 className="main__title">
							<Reveal delay={0.6} color={Color.c1}>
								Hi,
							</Reveal>
							<Reveal delay={0.7} color={Color.c2}>
								my name is <span>Hatam Soyunov</span>,
							</Reveal>
							<Reveal delay={0.6} color={Color.c1}>
								I'm <span>front-end</span> developer
							</Reveal>
						</h1>
						<h3 className="main__subtitle">
							<Reveal delay={0.8} color={Color.c2}>
								with over <span>6 years</span> experience.
							</Reveal>
						</h3>
						<Reveal delay={0.9} color={Color.c5} direction="tb">
							<div className="main__lets">Let me show You...</div>
						</Reveal>
					</div>
					<div className="main__col">
						<div className="main__img-wrap" ref={mainImg}>
							<img src={imgLayer1} alt="" onLoad={e => (e.currentTarget.style.opacity = 1)} />
							<img src={imgLayer2} alt="" onLoad={e => (e.currentTarget.style.opacity = 1)} />
							<img src={imgLayer3} alt="" onLoad={e => (e.currentTarget.style.opacity = 1)} />
							<img src={imgLayer4} alt="" onLoad={e => (e.currentTarget.style.opacity = 1)} />
						</div>
					</div>
				</div>

				<ScrollToNext nextSectSelector="#about" />
			</div>
		</section>
	);
}

export default withRouter(Main);
