import React from 'react';
import LandingPage from './landingpage';
import Aboutus from './aboutus';
import Contact from './contact';
import Services from './services';
import {Switch, Route} from 'react-router-dom';

const Main = () =>( 
  <Switch>
    <Route exact path="/" component = {LandingPage}/>
    <Route path="/aboutus" component = {Aboutus}/>
    <Route path="/contact" component = {Contact}/>
    <Route path="/services" component = {Services}/>

  </Switch>
)

export default Main; 