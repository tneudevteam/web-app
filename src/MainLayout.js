import React, { Component } from 'react';
import {
  Layout,
  Header,
  IconButton,
  Drawer,
  Navigation,
  Content
} from 'react-mdl'
import {Link} from 'react-router';

class MainLayout extends Component {
  render() {
    return (
      <Layout fixedHeader fixedDrawer>
        <Header title="ТНЕУ"/>
        <Drawer title="">
          <Navigation>
            <Link to="/news"><IconButton name="list"/>&nbsp;Новини</Link>
            <Link to="/map"><IconButton name="map"/>&nbsp;Карта</Link>
            <a href="http://modulok.ml/" target="_blank"><IconButton name="filter_5"/>&nbsp;Оцінки</a>
            <Link to=""><IconButton name="settings_overscan"/>&nbsp;Сканер QR кодів</Link>
          </Navigation>
        </Drawer>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default MainLayout;
