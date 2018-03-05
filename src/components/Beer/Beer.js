import React, { Component } from 'react';
import './Beer.css';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav';
import { connect } from 'react-redux';
import { getBeerInventory } from '../../ducks/reducer';
import "./../../animate.css";
// import ScrollAnimation from 'react-animate-on-scroll'
import Reveal from 'react-reveal';




class Beer extends Component {

    componentDidMount() {
        this.props.getBeerInventory();
    }

    render() {

        const beerListing = this.props.beer.map((element, index) => {
            return (
                <Reveal effect='fadeInLeft' effectOut='fadeOutLeft'>
                <div className='beer-item' key={index}>
                    <h2>{element.beername}</h2>
                    <img className='beer_item-img' src={element.img} alt='' />
                    <h3>STYLE: {element.style}</h3>
                    <h3>ABV: {element.abv + '%'}</h3>
                    <h3>IBU: {element.ibu}</h3>
                    <h3>{element.beerdescription}</h3>
                </div>
                </Reveal>
            )
        });

        return (
            <div className='main_beer-container'>
                <NavBar />
                <div className='main_beer-content'>
                    <div id='information-right' className='information-right'>
                        <div className='pouring-hours'>
                            <h2> Pouring Hours: </h2>
                            <ul className='hours-list'>
                                <ul>Mon     12:00 - 8:45</ul>
                                <ul>Tues   12:00 - 8:45</ul>
                                <ul>Wed 12:00 - 8:45</ul>
                                <ul>Thur  12:00 - 8:45</ul>
                                <ul>Fri    12:00 - 8:45</ul>
                                <ul>Sat  12:00 - 8:45</ul>
                                <ul>Sun    12:00 - 8:45</ul>
                            </ul>
                        </div>
                        <div id='tap-beers' className='tap-beers'>
                            <h2>BEERS ON TAP:</h2>
                            <ul className='on-tap-list'>
                                <ul>MVP</ul>
                                <ul>MAD MACEY</ul>
                                <ul>New California Republic</ul>
                            </ul>
                        </div>
                    </div>
                    <div className='beer-container'>
                        {beerListing}
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
        beer: state.beer
    }
}

export default connect(mapStateToProps, { getBeerInventory })(Beer);