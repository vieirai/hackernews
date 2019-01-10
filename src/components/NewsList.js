import React, {Component} from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class NewsList extends Component {

  constructor(props) {
    super(props);

    //initiate default state
    this.state = {
      storyList: []
    };
  }

  componentDidMount() {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(response => {
        this.setState({storyList: response.data.slice(0, 50)});
      });
  }

  render() {

    const items = this.state.storyList.map(item => <NewsItem key={item} code={item}/>);

    return (
      <Grid item xs={12}>
        <Typography variant="h6">
          Latest posts
        </Typography>
        <div >
          <List>
            {items}
          </List>
        </div>
      </Grid>
    );
  }
}

export default NewsList;
