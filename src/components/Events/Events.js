import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './Events.css';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav';
import { connect } from 'react-redux';
import { getEvents, getUserInfo } from '../../ducks/reducer';
import "./../../animate.css";
import ScrollAnimation from 'react-animate-on-scroll'

class Events extends Component {

    componentDidMount() {
        this.props.getEvents();
        this.props.getUserInfo()
    }

    isUserLoggedIn() {

    }

    render() {

        // const isLoggedIn = this.props.user.userid;

        const eventList = this.props.events.map((element, index) => {
            return (
                <div className='event-item' key={index}>
                    <h2>{element.eventname}</h2>
                    <img className='event_item-img' src={element.img} alt='' />
                    <h3>EVENT DATE: {element.eventdate}</h3>
                    <h3>{element.eventdescription}</h3>
                </div>
            )
        })

        return (
            <div className='main_event-container'>
                <NavBar />
                <div className='main_event-content'>
                    <div id='information-right' className='information-right'>
                        <div id='tap-beers' className='tap-beers'>
                            <h2>BEERS ON TAP:</h2>
                            <ul className='on_tap-list'>
                                <ul>MVP</ul>
                                <ul>MAD MACEY</ul>
                                <ul>New California Republic</ul>
                            </ul>
                        </div>
                        <div className='pouring-hours'>
                            <h2> Pouring Hours: </h2>
                            <ul className='hours-list'>
                                <ul>Mon     12:00 - 8:45</ul>
                                <ul>Tues   12:00 - 8:45</ul>
                                <ul>Wed 12:00 - 8:45</ul>
                                <ul>Thurs  12:00 - 8:45</ul>
                                <ul>Fri    12:00 - 8:45</ul>
                                <ul>Sat  12:00 - 8:45</ul>
                                <ul>Sun    12:00 - 8:45</ul>
                            </ul>
                        </div>
                    </div>
                    <div className='event-container' >
                        <div className='header-info-events'><h1>EVENTS</h1></div>
                        <div className='event-info'>We can open the brewery for private parties or
                            events during non-operating hours (Sunday after 6pm & Monday – Wednesday)
                            If you’re interested and would like more information please call the brewery at (530)555-5555 –
                            If we don’t pick up please leave a message!<br />
                            <br />
                            Here is an up to date listing of our public events:</div>
                        <ScrollAnimation offset={75} duration={.73} animateIn='fadeInLeft'>
                            {eventList}
                        </ScrollAnimation>
                    </div>
                    <div className='spacer'></div>
                    <BottomNav />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.events,
        user: state.user
    }
}

export default connect(mapStateToProps, { getEvents, getUserInfo })(Events);