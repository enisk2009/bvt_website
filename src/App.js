import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//import { createBrowserHistory } from 'history';

//import components
import Home from './components/home';
import ScansPage from './components/pages/ScansPage/ScansPage'
import MakePaymentPage from './components/pages/MakePaymentPage/MakePaymentPage';
import ScheduleTourPage from './components/pages/ScheduleTourPage/ScheduleTourPage';
import PricingPage from './components/pages/PricingPage/PricingPage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import ContactPage from './components/pages/ContactPage/ContactPage';


//
// const history = createBrowserHistory();
//
// const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
// if (path) {
//     history.replace(path);
// }

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div id = "main">
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/3D_scans' component = {ScansPage}/>
          <Route exact path = '/make_a_payment' component = {MakePaymentPage}/>
          <Route exact path = '/schedule_tour' component = {ScheduleTourPage}/>
          <Route exact path = '/pricing' component = {PricingPage}/>
          <Route exact path = '/about' component = {AboutPage}/>
          <Route exact path = '/contact' component = {ContactPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
