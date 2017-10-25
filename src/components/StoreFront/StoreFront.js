import React, { Component } from 'react';
import { connect } from 'react-redux';
import './StoreFront.css';
import NavBar from '../NavBar/NavBar';

import { getInventory, addToCart } from '../../ducks/reducer';

class StoreFront extends Component {

    componentDidMount() {
        this.props.getInventory();
    }

    render() {
        // console.log(this.props.inventory)
        const inventoryItem = this.props.inventory.map((element, index) => {
            return (
                <div className='product-container' key={index}>
                    <h2>{element.productname}</h2>
                    <img className='product-img' scr={element.img} alt='' />
                    <h2>{element.description}</h2>
                    <h3>{'$' + element.price}</h3>
                    <button className='addToCartBtn' onClick={() => this.props.addToCart(element)} >Add Item</button>
                </div>
            )
        })

        return (
            <div>
                <NavBar />
                <div className='category-container'>
                    <ul className='categories'>
                        <li>Shirts</li>
                        <li>Hats</li>
                        <li>Hoodies</li>
                        <li>Glassware</li>
                        <li>Misc</li>
                    </ul>
                </div>

                <div className='storefront-container'>
                    {inventoryItem}
                </div>

                <div className = 'cart-container'>
                    
                </div>

                <div className='bottom-info'>
                    <ul className='info-items'>
                        <ul>Mad Macey Brewery</ul>
                        <ul>Phone:(530)-555-5555</ul>
                        <ul>Address: 5555 Bracteole Rd Meadow Vista, CA 95722</ul>
                        <ul>Open Monday - Sunday</ul>
                        <ul>Hours: 12pm - 9pm</ul>
                        <ul>Last Call @ 8:45pm</ul>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        inventory: state.inventory
    }
}

export default connect(mapStateToProps, { getInventory, addToCart })(StoreFront);