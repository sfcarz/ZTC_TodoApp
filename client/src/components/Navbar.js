import './App.css';
import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from '../App';

function App() {
  return (
    <div className="demo-big-content" style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
    <Header className="header-color" title={<span><span style={{ color: '#ddd' }}></span><strong>ZWTC ToDo App</strong></span>}>
            <Navigation>
                <Link to="/signIn">Sign In</Link>
                <Link to="/signUp">Sign Up</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/signIn">Sign In</Link>
                <Link to="/signUp">Sign Up</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
