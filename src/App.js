import React, { Component } from 'react';
import {
  Layout,
  Header,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  IconButton,
  Cell,
  Grid,
  Drawer,
  Navigation,
  Content
} from 'react-mdl'
import 'whatwg-fetch';
import './App.css';

class App extends Component {
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
      <Layout fixedHeader fixedDrawer>
        <Header title="ТНЕУ"/>
        <Drawer title="">
          <Navigation>
            <a href=""><IconButton name="list"/> Новини</a>
            <a href=""><IconButton name="map"/> Карта</a>
            <a href=""><IconButton name="filter_5"/> Оцінки</a>
            <a href=""><IconButton name="settings_overscan"/> Сканер QR кодів</a>
          </Navigation>
        </Drawer>
        <Content>
          <Grid>
            {
              this.state.news.map((item, index) => {
                return <Cell key={index} col={6} tablet={12}>
                  <Card shadow={0}
                        style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{
                      color: '#fff',
                      height: '176px',
                      background: 'url(' + item.imageLink + ') center / cover'
                    }}>{item.title}</CardTitle>
                    <CardText>
                      {item.description}
                    </CardText>
                    <CardActions border>
                      <Button colored
                              onClick={() => window.open(item.readMoreLink)}>Читати
                        далі</Button>
                    </CardActions>
                  </Card>
                </Cell>;
              })
            }
          </Grid>
        </Content>
      </Layout>
    );
  }
}

export default App;
