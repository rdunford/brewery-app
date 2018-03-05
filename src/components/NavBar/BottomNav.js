import React, { Component } from 'react';
import "./BottomNav.css";
import { getUserInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BottomNav extends Component {

    render() {
        return (
                <div id = 'bottomNav' className='bottom-info'>
                    <ul className='info-items'>
                        <li>Mad Macey Brewery</li>
                        <li>Phone:(530)-555-5555</li>
                        <li>Address: 5555 Bracteole Rd Meadow Vista, CA 95722</li>
                        <li>Open Monday - Sunday</li>
                        <li>Hours: 12pm - 9pm</li>
                        <li>Last Call @ 8:45pm</li>
                        {this.props.user.admin ? <Link to='/admin'><li className='admin'>.</li></Link> : null}
                    </ul>
                </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { getUserInfo })(BottomNav)