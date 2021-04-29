import React, {Component} from 'react';
import {Link} from 'react-router-dom';


//import components
import Navbar from './navbar';
/*
import AboutMe from './aboutMe';
import Skills from './skills';
import Footer from './footer';
import ProjectsHome from './projectsHome';
import Contact from './contact';
*/
var Scroll = require('react-scroll');

class Home extends Component{
  state = {
    currentURL: '/'
  }
  /*
  checkForJumpToContact(){
    if(this.props.location.data){
      Scroll.scroller.scrollTo('contact',{
        smooth : true,
        spy : true,
        duration :600
      })
    }
  }

  componentDidMount(){
    //when the home page mounts, it checks if data was passed into the prop for this component
    //meaning that the user came to this page by pressing the contact button
    //if this is the case then the screen will scroll down to the contact section
    this.checkForJumpToContact();
    this.Runobservers();
  }

  Runobservers(){
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
      threshold:0.8
      //rootMargin: "-20px 0px 0px 0px"

    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){

      entries.forEach(entry => {
        if (!entry.isIntersecting){
          return;
        }
        else{
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      })

    },appearOptions);

    faders.forEach(fader =>{
      appearOnScroll.observe(fader);
    });

  }
  */
  render(){
    return(

      <div id = "home">

      <Navbar/>


      </div>


    );
  }
}

export default Home;
