import React, {Component} from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

class NewsList extends Component {

  constructor(props) {
    super(props);

    //initiate default state
    this.state = {
      storyList: []
    };
  }

  componentDidMount() {
    this.items = [];
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(response => {
        this.setState({storyList: response.data.slice(0, 50)});
      });
  }

  render() {

    const items = this.state.storyList.map(item => <NewsItem key={item} code={item}/>);

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

export default NewsList;
