import React, { Component } from 'react';


import axios from 'axios';
import PictureList from './PictureList';



class Container extends Component {


	constructor() {

		super();

		this.state = {
            query: '',
            photos: [],
            loading: true
		}
	}

	componentDidMount() {
		if (this.props.query !== '') {
            this.performSearch(this.props.query);
		}
	}

	componentWillReceiveProps(props) {

        this.setState({
            query: props.query,
            loading: true
        });
    
		this.performSearch(props.query);
    }
    
    // get API data
	performSearch = (query) => {
		axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.api}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)

		.then((response) => {
			this.setState({
                query: this.props.query,
                photos: response.data.photos.photo,
                loading: false
			});
		})

		.catch((error) => {
			console.log('error', error);
		});
	}

	render() {

		return (
            <div className="main-content">
                {
                (this.state.loading)
                    ? <h2>Loading...</h2>
                    : <PictureList
                    photos={ this.state.photos }
                    query={ this.state.query } />
                }
            </div>
		)
    }
}

export default Container;

