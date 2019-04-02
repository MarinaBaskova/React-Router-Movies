import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			savedList: []
		};
	}

	addToSavedList = (movie) => {
		const savedList = this.state.savedList.slice();
		// savedList.push(movie);
		// this.setState({ savedList });
		if (savedList.indexOf(movie) === -1) {
			savedList.push(movie);
			this.setState({ savedList });
		} else {
			console.log('Item was already added');
		}
	};

	render() {
		return (
			<div>
				<SavedList list={this.state.savedList} />
				<Route exact path="/" component={MovieList} />
				{/* <Route path="/movies/:id" component={Movie} /> */}
				<Route
					path="/movies/:id"
					render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />}
				/>
			</div>
		);
	}
}
