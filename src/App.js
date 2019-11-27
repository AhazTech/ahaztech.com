import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'; 
import Main from './components/main';
import {  } from "module";

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '/ddd' }}>AhazTech / </span><strong>The Title</strong></span>}>
            <Navigation>
                <a href="/aboutus">About Us</a>
                <a href="/contact">Contact</a> 
                <a href="/services">Services</a>
                
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/aboutus">About Us</a>
                <a href="/contact">Contact</a> 
                <a href="/services">Services</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className = "page-content"/>
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
