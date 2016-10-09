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

class App extends Component {
  render() {
    return (
      <Layout fixedHeader fixedDrawer>
        <Header title="ТНЕУ"/>
        <Drawer title="">
          <Navigation>
            <a href=""><IconButton name="list"/> Новини</a>
            <a href=""><IconButton name="map"/> Карта</a>
            <a href=""><IconButton name="filter_5"/> Оцінки</a>
            <a href=""><IconButton name="settings_overscan"/> Сканер QR
              кодів</a>
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
