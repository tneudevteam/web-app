import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Cell,
  Grid
} from 'react-mdl'
import 'whatwg-fetch';
import './News.css';

class News extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    }
  }

  fetchNews() {
    fetch('http://localhost:9191/snippets?limit=20')
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.setState({news: results});
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchNews();
  }

  render() {
    return (
      <Grid>
        {
          this.state.news.map((item, index) => {
            const imageLink = item.imageLink || 'https://getmdl.io/assets/demos/welcome_card.jpg';
            return (
              <Cell key={index} col={6} tablet={12}>
                <Card shadow={0}
                      style={{width: '512px', margin: 'auto'}}>
                  <CardTitle style={{
                    color: '#fff',
                    height: '176px',
                    background: 'url(' + imageLink + ') center / cover'
                  }}>{item.title}</CardTitle>
                  <CardText>
                    {item.description}
                  </CardText>
                  <CardActions border>
                    <Button colored
                            onClick={() => window.open(item.readMoreLink)}>
                      Читати далі
                    </Button>
                  </CardActions>
                </Card>
              </Cell>
            )
          })
        }
      </Grid>
    );
  }
}

export default News;
