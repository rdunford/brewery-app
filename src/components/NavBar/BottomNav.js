import React, { Component } from 'react';
import "./BottomNav.css"

class BottomNav extends Component {

    render() {
        return (
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
            
        )
    }
}
export default BottomNav;