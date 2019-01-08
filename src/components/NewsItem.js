import React, { Component } from 'react';
import axios from 'axios';

class NewsItem extends Component {

  constructor(props) {
    super(props);

    //initiate default state
    this.state = {
      item: {}
    };

  }

  componentDidMount() {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.code}.json?print=pretty`)
      .then(response => {
        this.setState({item: response.data});
      });
  }

  render() {

    return (
      <li>{this.state.item.title}</li>
    );
  }
}

export default NewsItem;
