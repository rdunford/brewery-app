import React, { Component } from 'react';
import { connect } from 'react-redux';
import './StoreFront.css';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../NavBar/BottomNav'
import StripeCheckout from 'react-stripe-checkout';
import { getInventory, addToCart, removeFromCart, getCategoryInventory, getUserInfo, emptyCart, checkout } from '../../ducks/reducer';
import axios from 'axios';
import Modal from 'react-responsive-modal';

class StoreFront extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
        this.toggleCartModal = this.toggleCartModal.bind(this);
    }

    componentDidMount() {
        this.props.getInventory();
        this.props.getUserInfo();
    }

    toggleCartModal() {
        this.setState({ open: !this.state.open })
    }


    // Stripe Token Services
    onToken = (token) => {
        const cart = this.props.cart;
        const userid_order = this.props.user.userid;
        console.log(userid_order, 'this is user id being passed')
        this.props.checkout()

        token.card = void 0;
        axios.post('/api/payment', { token, amount: 100 }).then(response => {
            this.props.checkout()
            alert('Thank you for your business.')
            axios.post('/api/order', { cart, userid_order })

        });
    }

    render() {
        const { open } = this.state
        // console.log(this.props.cart, 'this is the current cart')
        // console.log(this.props.user.userid, 'this is the user id')

        // const isLoggedIn = this.props.user.userid;

        // Maps the items in the cart redux state, used to displaying the items in the cart summary
        const cartItems = this.props.cart.map((element, index) => {
            return (
                <div className='cartMenu-container' key={index}>
                    <div>{element.productname}</div>
                    <img className='cartMenu-img' src={element.img} alt='' />
                    <div>{'$' + element.price}</div>
                    <button className='removeItem' onClick={() => this.props.removeFromCart()}>REMOVE</button>
                </div>
            )
        })
        // Shows the number of items currently in the cart summary
        const cartQuantity = this.props.cart.length;
        //Testing for price and why it is showing as a string from database
        // var test = 23.44;
        // console.log(typeof test);

        // Displayed total price in the cart summary
        const totalCartPrice = this.props.cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
        // console.log(this.props.cart, 'this is the cart')
        // console.log(this.props.cart.price, 'this is the price')
        // console.log(typeof totalCartPrice)

        //Used to display the inventory upon entering the store component
        const inventoryItem = this.props.inventory.map((element, index) => {
            //This console log is here because the database was store price as a num 
            // but returning it as a string
            // console.log(typeof element.price)
            return (
                <div className='product-container' key={index}>
                    <h2>{element.productname}</h2>
                    <img className='product-img' src={element.img} alt='' />
                    <h5>{element.description}</h5>
                    <h3>{'$' + element.price}</h3>
                    <button className='addToCartBtn' onClick={() => this.props.addToCart(element)} >ADD TO CART</button>
                </div>
            )
        });

        return (
            <div className='main-page'>
                <NavBar />
                <div className='main_store-content'>
                    {/* Menu to allow user to show inventory based upon category */}
                    <div className='category-container'>
                        <ul className='categories'>
                            <li className='shirt' onClick={() => this.props.getCategoryInventory('shirt')}>SHIRTS</li>
                            <li className='hat' onClick={() => this.props.getCategoryInventory('hat')}>HATS</li>
                            <li className='hoodie' onClick={() => this.props.getCategoryInventory('hoodie')}>HOODIES</li>
                            <li className='glassware' onClick={() => this.props.getCategoryInventory('glassware')}>GLASSWARE</li>
                            <li className='misc' onClick={() => this.props.getCategoryInventory('misc')}>MISC</li>
                        </ul>

                        {/* Quick visual cart summary and allows drop down for more detailed summary + checkout */}
                        {this.state.open ?

                            <div className='cart_open-container'>
                                <div onClick={() => this.toggleCartDetails()} className='cart_open-header'>CART SUMMARY:({cartQuantity})${totalCartPrice}</div>
                                <div id='dropDownCart' className='dropDown-items'>
                                    {cartItems}
                                    <div className='bottom-of-cart'>
                                        <div id='clear-cart' className='clear-cart' onClick={() => this.props.emptyCart()} >| Clear |</div>
                                        <div id='stripeBtn' className='checkoutBtn'>
                                            <StripeCheckout
                                                token={this.onToken}
                                                stripeKey={process.env.REACT_APP_STRIPEKEY}
                                                amount={totalCartPrice * 100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            :

                            <div className='cart-container' >
                                <div onClick={() => this.toggleCartDetails()} className='cart-summary'>CART SUMMARY:({cartQuantity})${totalCartPrice}</div>
                            </div> 
                         }
                        <div className='cart-container' >
                            <div onClick={this.toggleCartModal} className='cart-summary'>CART SUMMARY:({cartQuantity})${totalCartPrice}</div>
                            {cartItems}
                        </div>
                        {/* <Modal big closeOnEsc open={open} onClose={this.toggleCartModal}> */}
                        {/* </Modal> */}
                    </div>

                    {/* Renders the inventory desired */}
                    <div className='storefront-container'>
                        {inventoryItem}
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
        inventory: state.inventory,
        cart: state.cart,
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo, getInventory, addToCart, getCategoryInventory, removeFromCart, emptyCart, checkout })(StoreFront);