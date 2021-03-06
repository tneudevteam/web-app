import React, { Component } from 'react';
import {
  Layout,
  Header,
  IconButton,
  Drawer,
  Navigation,
  Content
} from 'react-mdl'
import 'whatwg-fetch';
import './App.css';
import News from './News';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <Layout fixedHeader fixedDrawer>
        <Header title="ТНЕУ"/>
        <Drawer title="">
          <Navigation>
            <Link to="/news"><IconButton name="list"/>&nbsp;Новини</Link>
            <Link to="/map"><IconButton name="map"/>&nbsp;Карта</Link>
            <Link to=""><IconButton name="filter_5"/>&nbsp;Оцінки</Link>
            <Link to=""><IconButton name="settings_overscan"/>&nbsp;Сканер QR кодів</Link>
          </Navigation>
        </Drawer>
        <Content>
          <News/>
        </Content>
      </Layout>
    );
  }
}

export default App;
