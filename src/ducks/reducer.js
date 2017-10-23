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
            return Object.assign({}, state, {inventory: action.payload});
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

export function getInventory(){
    const storeInventory = axios.get('/api/productInventory').then(res => {
        console.log(res.data)
        return res.data;
    });

    return{
        type: GET_INVENTORY,
        payload: storeInventory
    }

}