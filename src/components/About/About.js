import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './About.css';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav';

class About extends Component {



    render() {
        return (
            <div>
                <NavBar />
                <div>
                <h1>
                    This is the about page.
                </h1>
                </div>
                <BottomNav />
            </div>
        )
    }
}

export default About;