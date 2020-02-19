import React, { useEffect, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { connect } from 'react-redux';

import './app.sass';

import { ProjectServiceProvider } from 'components/project-service-context';
import ProjectService from 'services/projects-service';
import Preloader from 'components/preloader';
import LeftBar from 'components/left-bar';
import Menu from 'components/menu';
import Cursor from 'components/cursor';
import RightBar from 'components/right-bar';
import Footer from 'components/footer';
import Home from 'components/pages/home';
import Project from 'components/pages/project';
import NotFound from 'components/pages/not-found';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const projectService = new ProjectService();

function App(props) {
	useEffect(() => {
		const hash = props.location.hash;

		if (hash !== '' && props.pageIsLoaded) {
			// reset current/default scroll position
			gsap.to(window, 0, { scrollTo: 0 });

			// animation scroll
			gsap.to(window, 1, {
				scrollTo: document.querySelector(hash).offsetTop,
				ease: 'expo.out'
			});

			// remove hash
			window.history.pushState('', document.title, window.location.pathname);
		}
	}, [props]);

	return (
		<Fragment>
			<div className="bg-lines">
				<div></div>
				<div></div>
				<div></div>
			</div>

			<Preloader />
			<LeftBar />
			<RightBar />
			<Menu />

			<ProjectServiceProvider value={projectService}>
				<TransitionGroup component={Fragment}>
					<CSSTransition key={props.location.key} timeout={600} classNames="page">
						<Switch location={props.location}>
							<Route exact path="/" component={Home} />
							<Route path="/projects/:slug" component={Project} />
							<Route component={NotFound} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</ProjectServiceProvider>

			<Cursor />
			<Footer />
		</Fragment>
	);
}

const mapStateToProps = state => {
	return {
		pageIsLoaded: state.pageIsLoaded
	};
};

export default connect(mapStateToProps, null)(withRouter(App));
