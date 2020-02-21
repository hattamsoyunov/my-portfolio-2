import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { pageIsLoaded } from 'actions';
import { ReactSVG } from 'react-svg';
import gsap from 'gsap';

import './preloader.sass';
import logo from 'img/logo.svg';

function allowScroll() {
	document.body.classList.add('is-load');
}

function Preloader(props) {
	const { pageIsLoaded, is404Page } = props;
	const preloader = useRef(null);
	const progressLine = useRef(null);

	useEffect(() => {
		const tl = gsap.timeline();
		tl.to(progressLine.current, 0.6, { x: '-50%', delay: 1 });

		window.onload = () => {
			if (is404Page) {
				tl.to(progressLine.current, 0.4, { x: '0%' });
				setTimeout(() => {
					gsap.to(preloader.current, 1, { y: '-100%', ease: 'expo.inOut' });
					gsap.to(preloader.current, 0, { autoAlpha: 0, delay: 1 });
					pageIsLoaded();
					allowScroll();
				}, 1000);
			} else {
				setTimeout(() => {
					tl.to(progressLine.current, 1.4, { x: '0%' });
					setTimeout(() => {
						gsap.to(preloader.current, 1, { y: '-100%', ease: 'expo.inOut' });
						gsap.to(preloader.current, 0, { autoAlpha: 0, delay: 1 });

						pageIsLoaded();
						allowScroll();
					}, 1400);
				}, 600);
			}
		};

		return () => {
			tl.seek(0);
		};
	}, [pageIsLoaded, preloader, progressLine, is404Page]);

	return (
		<div className="preloader" ref={preloader}>
			<ReactSVG src={logo} />
			<div className="preloader__progress">
				<div className="preloader__progress-line" ref={progressLine}></div>
			</div>
		</div>
	);
}

const mapStateToProps = ({ is404Page }) => {
	return { is404Page };
};
export default connect(mapStateToProps, { pageIsLoaded })(Preloader);

// async function download() {
// 	// Шаг 1: начинаем загрузку fetch, получаем поток для чтения
// 	let response = await fetch('/images/projects/dss-corp/main.jpg');

// 	const reader = response.body.getReader();

// 	// Шаг 2: получаем длину содержимого ответа
// 	const contentLength = +response.headers.get('Content-Length');

// 	// Шаг 3: считываем данные:
// 	let receivedLength = 0; // количество байт, полученных на данный момент
// 	let chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)
// 	while (true) {
// 		const { done, value } = await reader.read();

// 		if (done) {
// 			break;
// 		}

// 		chunks.push(value);
// 		receivedLength += value.length;

// 		console.log(`Получено ${receivedLength} из ${contentLength}`);
// 	}
// }

// download();
