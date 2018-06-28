import React, {Component} from 'react';
import axios from 'axios';
import api_key from '../config.js';
import List from './List';





export default class Container extends Component {
  constructor(props) {
  super(props);
  this.state = {
    pics: [],
    tags: this.props.tags,
    loading: true
  };
}

componentDidMount() {
  this.performSearch();
}

performSearch = () => {
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${this.state.tags}+&per_page=16&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        pics: response.data.photos.photo,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }


  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <List data={this.state.pics}/>
        }
      </div>
    );
  }
}
