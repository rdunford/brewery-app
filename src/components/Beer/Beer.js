import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './Beer.css';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav';

class Beer extends Component {



    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <h1>
                        This is the beer products about page.
                    </h1>
                    <h1>
                        This is the beer products about page.
                    </h1>
                    <h1>
                        This is the beer products about page.
                    </h1>
                    <h1>
                        This is the beer products about page.
                    </h1>
                    <h1>
                        This is the beer products about page.
                    </h1>
                    <h1>
                        This is the beer products about page.
                    </h1>
                    <h1>
                        This is the beer products about page.
                    </h1>
                    <h1>
                        This is the beer products about page.
                    </h1>
                    <h1>
                        This is the beer products about page.
                    </h1>
                    <h1>
                        This is the beer products about page.
                    </h1>
                    <h1>
                        This is the beer products about page.
                    </h1>
                    <h1>
                        This is the beer products about page.
                    </h1>
                </div>
                <div>
                    Test area
                </div>
                <div className='bottom-info'>
                    <ul className='info-items'>
                        <li>Mad Macey Brewery</li>
                        <li>Phone:(530)-555-5555</li>
                        <li>Address: 5555 Bracteole Rd Meadow Vista, CA 95722</li>
                        <li>Open Monday - Sunday</li>
                        <li>Hours: 12pm - 9pm</li>
                        <li>Last Call @ 8:45pm</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Beer;