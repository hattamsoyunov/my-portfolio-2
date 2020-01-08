import React from 'react';
// import { Route, Switch } from 'react-router-dom';

import './app.sass';

import LeftBar from './../left-bar';
import Main from './../pages/home/main';
import Menu from './../menu';
import Cursor from '../cursor';
import RightBar from './../right-bar';
import Skills from '../pages/home/skills';
import WorkExperience from '../pages/home/work-experience';
import RecentlyProjects from '../pages/home/recently-projects';

function App() {
	return (
		<main className="main-page">
			<div className="bg-lines">
				<div></div>
				<div></div>
				<div></div>
			</div>

			<LeftBar />
		
			<Main />
			<Skills />
			<WorkExperience />
			<RecentlyProjects limit={6} step={3}/>

			<RightBar />
				
			<Menu />

			<Cursor />
		</main>
	);
}

export default App;