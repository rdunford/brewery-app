import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import "./NavBar.css"
import { getUserInfo } from '../../ducks/reducer'
import { connect } from 'react-redux'


class NavBar extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.getUserInfo()
    }


    render() {
        const isLoggedIn = this.props.user.userid;
        return (
            <div className='nav-parent'>
                <div className='logo-container'>
                    {/* <img src = {Background} alt =''/> */}
                    <Link to='/'><img className='logo-image' src={Logo} alt='' /></Link>
                </div>
                <div className='navbar-links-container'>
                    <ul className='navbar-links'>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/beer'>BEER</Link></li>
                        <li><Link to='/events'>EVENTS</Link></li>
                        <li><Link to='/about'>ABOUT</Link></li>
                        <li><Link to='/storefront'>STORE</Link></li>
                        {isLoggedIn ? (<li><Link to = '/dashboard'>PROFILE</Link></li>) : null}
                        {isLoggedIn ? (<a href='http://localhost:3005/auth/logout'><li>LOG OUT</li></a>) : (<a href={process.env.REACT_APP_LOGIN}><li>LOGIN</li></a>)}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(NavBar)