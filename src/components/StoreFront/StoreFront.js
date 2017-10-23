import React, { Component } from 'react';
import { connect } from 'react-redux';
import './StoreFront.css';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav';
import {getInventory} from '../../ducks/reducer';

class StoreFront extends Component {

    componentDidMount(){
        this.props.getInventory();
    }

    render() {
        console.log(this.props.inventory)
        const inventoryItem = this.props.inventory.map((element, index) =>{
            return(
                <div className = 'product-container' key={index}>
                <h3>{element.productname}</h3>
                <img scr= {element.img} alt=''/>
                <h3>{element.description}</h3>
                <h2>{'$' + element.price}</h2>
                <button className = 'addToCartBtn'>Add Item</button>
                </div>
        )
        })

        return (
            <div>
                <NavBar />
                <div className ='store-parent'>
                    <div className= 'product-area'>
                        {inventoryItem}
                    </div>
                </div>
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
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        inventory: state.inventory
    }
}

export default connect(mapStateToProps, {getInventory})(StoreFront);