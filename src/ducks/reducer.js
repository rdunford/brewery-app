import axios from 'axios'

//STATE
const initalState = {
    user: {},
    inventory: [],
    product: {},
    cart: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_PRODUCT_INFO = 'GET_PRODUCT_INFO';
const GET_INVENTORY = 'GET_INVENTORY';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


//REDUCER
export default function reducer(state = initalState, action) {
    console.log(action)
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        case GET_INVENTORY + '_FULFILLED':
            return Object.assign({}, state, { inventory: action.payload });
        case ADD_TO_CART:
            const addCart = state.cart.slice();
            addCart.push(action.payload);
            return Object.assign({}, state, { cart: addCart });
        // return Object.assign({}, state, { cart: [...state.cart, action.payload] })
        case REMOVE_FROM_CART:
            const removeCart = state.cart.slice();
            removeCart.splice(action.payload, 1);
            return Object.assign({}, state, { cart: removeCart });
        default:
            return state;
    }
}

//ACTION BUILDER
export function getUserInfo() {
    //Gets the user --- .then waits for the response
    const userData = axios.get('/auth/me').then(res => {
        return res.data
    });

    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getInventory() {
    const storeInventory = axios.get('/api/productInventory').then(res => {
        // console.log(res.data)
        return res.data;
    });

    return {
        type: GET_INVENTORY,
        payload: storeInventory
    }

}

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}