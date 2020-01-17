import React, { useRef } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useTransition, animated } from 'react-spring';

import './app.sass';

import LeftBar from './../left-bar';
import Menu from './../menu';
import Cursor from '../cursor';
import RightBar from './../right-bar';
import Footer from 'components/footer';
import Home from 'components/pages/home';
import Project from 'components/pages/project';
import NotFound from 'components/pages/not-found';

function App(props) {
	const pageTransition = useRef(null);
	// const location = props.location;

	// const transitions = useTransition(location, location => location.pathname, {
	// 	from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
	// 	enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
	// 	leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
	// })
	
	// return transitions.map(({ item: location, props, key }) => (
	// 	<animated.div key={key} style={props}>
	// 		<Switch location={location}>
	// 			<Route exact path="/" component={Home} />
	// 			<Route path="/projects/:slug" component={Project} />
	// 			<Route component={NotFound} />
	// 		</Switch>
	// 	</animated.div>
	// ))
	
	return (
		<div>
			<div className="bg-lines"><div></div><div></div><div></div></div>
			<LeftBar />
			<RightBar />
			<Menu />

			{/* <Switch>
				<Route exact path="/" component={Home} />
				<Route path="/projects/:slug" component={Project} />
				<Route component={NotFound} />
			</Switch> */}

			<TransitionGroup>
				<CSSTransition
					key={props.location.key}
					timeout={600}
					classNames="my-node"
					mountOnEnter={true}
					unmountOnExit={true}
					// onEnter={() => {
					// 	pageTransition.current.classList.add('active')
					// }}
					// onExited={() => {
					// 	pageTransition.current.classList.remove('active')
					// }}
				>
					<Switch location={props.location}>
						<Route exact path="/" component={Home} />
						<Route path="/projects/:slug" component={Project} />
						<Route component={NotFound} />
					</Switch>
				</CSSTransition>
			</TransitionGroup>

			{/* {transitions.map(({ item: location, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={location}>
						<Route exact path="/" component={Home} />
						<Route path="/projects/:slug" component={Project} />
						<Route component={NotFound} />
					</Switch>
				</animated.div>
			))} */}

			<Cursor />
			<Footer />

			<div className="page-transition" ref={pageTransition}></div>
		</div>
	)
}

export default withRouter(App);