import React, { Component } from 'react';
import './Dashboard.css';
import { getUserInfo } from './../../ducks/reducer.js';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav';

class Dashboard extends Component {
    constructor(props) {
        //super allows the use of the 'this' keyword in the constructor and state
        //pass in props through the constructor and super because the docs say so
        super(props);
        this.state = {
            userInfo: {}
        }
    }
    //retrieving the information from the logged in user
    componentDidMount() {
        //this was imported onto props
        this.props.getUserInfo()
    }

    render() {

        const user = this.props.user;
        return (
            <div className = 'main_dashboard-container'>
                <NavBar />
                <div className = 'main_dashboard-content'>
                <div className='user-container'>
                    <h4>User profile:</h4>
                    {user.userid ? <img className='avatar' src={user.img} alt='pic' /> : null}
                    <p>Name: {user.userid ? user.user_name : null} </p>
                    <p>Email: {user.userid ? user.email : null}</p>
                <div className = 'order-history-container'>
                <div className = 'order-container'>

                </div>
                </div>
                </div>
                </div>

                <div className ='spacer'></div>
                <BottomNav />
            </div>
        )
    }
}

//more accurately -> mapReduxStateToProps
function mapStateToProps(state) {
    console.log('This is state going to the Dashboard', state)
    //object that is merged with the state object
    return {
        user: state.user
    }
}
//taking the object and the state object merging them through the reducer
export default connect(mapStateToProps, { getUserInfo })(Dashboard)