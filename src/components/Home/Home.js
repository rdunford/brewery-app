import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css';
import video from './Cable_Car.mp4'

export default class Login extends Component {
    render() {
        return (
            <div className='App'>
                <NavBar />
                <div className="video-container">
                    <video autoPlay loop className="fillWidth">
                        <source src={video} type="video/mp4" />
                    </video>

                </div>
            </div>
        )
    }
}