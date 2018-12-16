import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WeekPage from './components/WeekPage';
import StudyView from './components/StudyView';




const AppRouter = () => (

	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/homework" component={WeekPage} />
				<Route path="/study/:id" component={StudyView} />
				<Route path="/inClass" component={WeekPage} />
			</Switch>
		</div>
	</BrowserRouter>
);




ReactDOM.render(<AppRouter />, document.getElementById('app'));