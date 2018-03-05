import React, { Component } from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav';
import { getUserInfo, getUserOrders } from '../../ducks/reducer';

class Dashboard extends Component {
    // constructor(props) {
        //super allows the use of the 'this' keyword in the constructor and state
        //pass in props through the constructor and super because the docs say so
    //     super(props);
    //     this.state = {
    //         userInfo: {}
    //     }
    // }
    //retrieving the information from the logged in user
    componentDidMount() {
        this.props.getUserInfo()
        this.props.getUserOrders(this.props.user.userid)
    }


    render() {
        // const userOrders
        const user = this.props.user;

        console.log(this.props.productsOrdered)

        const UserPastOrders = this.props.productsOrdered.map((element, index) =>{
            return(
                <div className='User-products' key={index}>
                    <h3>{element.productname}</h3>
                </div>
            )
        })

        return (
            <div className='main_dashboard-container'>
                <NavBar />
                <div className='main_dashboard-content'>
                    <div className='user-container'>


                        <h4>User profile:</h4>
                        {user.userid ? <img className='avatar' src={user.img} alt='pic' /> : null}
                        <p>Name: {user.userid ? user.user_name : null} </p>
                        <p>Email: {user.userid ? user.email : null}</p>
                    </div>
                    <div className='order-history-container'>
                        <div className='order-container'>
                            Recent User orders: <br />
                            {user ? UserPastOrders : 'Nothing has been ordered!' }
                        </div>
                    </div>
                    
                <div className='spacer'></div>
                <div className='spacer'></div>
                <div className='spacer'></div>
                <div className='spacer'></div>
                <BottomNav />
                </div>
            </div>
        )
    }
}

//more accurately -> mapReduxStateToProps
function mapStateToProps(state) {
    console.log('This is state going to the Dashboard', state)
    //object that is merged with the state object
    return {
        user: state.user,
        productsOrdered: state.productsOrdered
    }
}
//taking the object and the state object merging them through the reducer
export default connect(mapStateToProps, { getUserInfo, getUserOrders })(Dashboard)