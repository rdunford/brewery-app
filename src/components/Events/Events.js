import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './Events.css';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav';

class Events extends Component {



    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <h1>
                        This is the events page.
                    </h1>
                </div>
                <BottomNav />
            </div>
        )
    }
}

export default Events;