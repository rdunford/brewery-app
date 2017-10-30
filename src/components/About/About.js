import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './About.css';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav';

class About extends Component {



    render() {
        return (
            <div className = 'main_about-container'>
                <NavBar />
                <div className = 'main_about-content'>
                
                <BottomNav />
                </div>
            </div>
        )
    }
}

export default About;