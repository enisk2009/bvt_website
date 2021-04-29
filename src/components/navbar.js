import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

import logo from "../images/BuffaloVirtualTours_logo_100.svg"
class Navbar extends Component{
  //IMPORTANT /////////////////////////////////////////
  //IF YOU ARE USING NAVBAR COMPONENT ON ANY OTHER PAGE BESIDES HOMEPAGE, YOU MUST PASS IN THE PROP: currentURL


  handleClick(){
    var element = document.getElementById('navbar').getElementsByTagName('ul')[0].classList.toggle('open');
  }


  render(){
    return(

      <div class="container">
        <nav class="navbar navbar-dark" style={{backgroundColor: 'rgb(51,51,51)'}}>


        <Link to = '/'><img src={logo} alt="Logo"/></Link>

        <ul>
        <li><Link to = '/3D_scans'>3D Scans</Link></li>
        <li><Link to = '/make_a_payment'>Make a Payment</Link></li>
        <li><Link to = '/schedule_tour'>Schedule Tour</Link></li>
        <li><Link to = '/pricing'>Pricing</Link></li>
        <li><Link to = '/about'>About</Link></li>
        <li><Link to = '/contact'>Contact</Link></li>
        </ul>

        </nav>
      </div>


    );
  }
}

export default Navbar;
