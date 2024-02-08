// src/redux/reducers.js

const initialState = {
    orders: require('../DummyData.json'), // Assuming orders.json contains the initial orders
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'EDIT_ORDER':
        // Update order in the current session
        return {
          ...state,
          orders: state.orders.map((o) =>
            o.id === action.payload.id ? action.payload : o
          ),
        };
  
      case 'DELETE_ORDER':
        // Delete order in the current session
        return {
          ...state,
          orders: state.orders.filter((o) => o.id !== action.payload),
        };
  
      case 'ADD_ORDER':
        // Add a new order in the current session
        return {
          ...state,
          orders: [...state.orders, action.payload],
        };
  
      default:
        return state;
    }
  };
  
  export default orderReducer;  // Add this line for the default export
  