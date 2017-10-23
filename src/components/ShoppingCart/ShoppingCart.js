// import NavBar from '../NavBar/NavBar';
// import BottomNav from '../NavBar/BottomNav';


import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav';
import axios from 'axios';
import {getInventory} from '../../ducks/reducer';

class StoreFront extends Component {

    // componentDidMount(){
    //     this.props.getInventory();
    // }

    render() {
        return (
            <div>
                TEST
                {/* <NavBar />
                <div>

                </div>
                <BottomNav /> */}
            </div>
        )
    }
}

export default StoreFront;