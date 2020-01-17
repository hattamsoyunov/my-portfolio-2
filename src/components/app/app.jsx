import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
				<CSSTransition key={props.location.key} timeout={300} classNames="my-node" mountOnEnter={true} unmountOnExit={true}>
					<Switch location={props.location}>
						<Route exact path="/" component={Home} />
						<Route path="/projects/:slug" component={Project} />
						<Route component={NotFound} />
					</Switch>
				</CSSTransition>
			</TransitionGroup>

			<Cursor />
			<Footer />
		</div>
	)
}

export default withRouter(App);