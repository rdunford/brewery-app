import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav';
import './Home.css';


export default class Login extends Component {
    render() {
        return (
            <div className='App'>  
                <NavBar />
                <div></div>
                <BottomNav />
            </div> 
        )
    }
}