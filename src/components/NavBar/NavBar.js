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
                    <Link to='/'><img className='logo-image' src={Logo} alt='' /></Link>
                </div>
                <div className='navbar-links-container'>
                    <ul className='navbar-links'>
                        <div><Link to='/'>HOME</Link></div>
                        <div><Link to='/beer'>BEER</Link></div>
                        <div><Link to='/events'>EVENTS</Link></div>
                        <div><Link to='/about'>OUR STORY</Link></div>
                        <div><Link to='/storefront'>STORE</Link></div>
                        {isLoggedIn ? (<div><Link to='/dashboard'>PROFILE</Link></div>) : null}
                        {isLoggedIn ? (<a href={process.env.REACT_APP_LOGOUT}><div>LOG OUT</div></a>) : (<a href={process.env.REACT_APP_LOGIN}><div>LOGIN</div></a>)}
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