import React, { Component } from 'react';
import axios from 'axios';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';

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
      <ListItem>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={this.state.item.title}/>
      </ListItem>
    );
  }
}

export default NewsItem;
