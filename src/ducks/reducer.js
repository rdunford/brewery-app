import axios from 'axios'

//STATE
const initalState = {
    user: {},
    userOrders: [],
    inventory: [],
    cart: [],
    beer: [],
    events: []
}

// ACTION TYPES
const GET_USER_INFO = 'GET_USER_INFO';
const GET_INVENTORY = 'GET_INVENTORY';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const GET_INVENTORY_CATEGORY = 'GET_INVENTORY_CATEGORY';
const GET_BEER_INVENTORY = 'GET_BEER_INVENTORY';
const GET_EVENTS = 'GET_EVENTS';
const EMPTY_CART = 'EMPTY_CART';
const GET_USER_ORDERS = 'GET_USER_ORDERS';
const CHECKOUT = 'CHECKOUT';
const GET_EVENTS_BY_MONTH = 'GET_EVENTS_BY_MONTH';


//REDUCER
export default function reducer(state = initalState, action) {
    // console.log(action)
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        // STOREFRONT COMPONENT
        case GET_INVENTORY + '_FULFILLED':
            return Object.assign({}, state, { inventory: action.payload });
        case GET_INVENTORY_CATEGORY + '_FULFILLED':
            return Object.assign({}, state, { inventory: action.payload });
        case ADD_TO_CART:
            const addCart = state.cart.slice();
            addCart.push(action.payload);
            return Object.assign({}, state, { cart: addCart });
        case REMOVE_FROM_CART:
            const removeCart = state.cart.slice();
            removeCart.splice(action.payload, 1);
            return Object.assign({}, state, { cart: removeCart });
        case EMPTY_CART:
            return Object.assign({}, state, { cart: action.payload });
        case CHECKOUT:
            return Object.assign({}, state, { cart: action.payload });
        // BEER COMPONENT
        case GET_BEER_INVENTORY + '_FULFILLED':
            return Object.assign({}, state, { beer: action.payload });
        // EVENT COMPONENT
        case GET_EVENTS + '_FULFILLED':
            return Object.assign({}, state, { events: action.payload });
        case GET_EVENTS_BY_MONTH + '_FULFILLED':
            return Object.assign({}, state, {events: action.payload});
        default:
            return state;
    }
}

//ACTION BUILDER
export function getUserInfo() {
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

export function getCategoryInventory(category) {
    const item = axios.get(`/api/productInventory/${category}`).then(res => {
        return res.data;
    })
    return {
        type: GET_INVENTORY_CATEGORY,
        payload: item
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

export function getBeerInventory() {
    const beerInventory = axios.get('/api/beerInventory').then(res => {
        return res.data;
    });
    return {
        type: GET_BEER_INVENTORY,
        payload: beerInventory
    }
}

export function getEvents(month) {
    let currentMonth = parseInt(month, 10)
    console.log(typeof currentMonth, currentMonth);
    const events = axios.get(`/api/eventListings/${currentMonth}`).then(res => {
        return res.data;
    });
    return {
        type: GET_EVENTS,
        payload: events
    }
}

export function getEventsByMonth(month) {
    let selectMonth = parseInt(month, 10);
    console.log(typeof selectMonth, selectMonth);
    const eventByMonth = axios.get(`/api/eventListings/${selectMonth}`).then(res => {
        return res.data;
    });
    return {
        type: GET_EVENTS_BY_MONTH,
        payload: eventByMonth
    }
}

export function emptyCart() {
    const empty = []
    return {
        type: EMPTY_CART,
        payload: empty
    }
}

export function getUserOrders() {
    const userOrders = axios.get('/api/ordersByUser').then(res => {
        return res.data;
    });
    return {
        type: GET_USER_ORDERS,
        payload: userOrders
    }
}

export function checkout() {
    let empty = [];
    return {
        type: CHECKOUT,
        payload: empty
    }
}