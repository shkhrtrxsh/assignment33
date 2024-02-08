export const editOrder = (order) => ({
    type: 'EDIT_ORDER',
    payload: order,
  });
  
  export const deleteOrder = (orderId) => ({
    type: 'DELETE_ORDER',
    payload: orderId,
  });
  
  export const addOrder = (order) => ({
    type: 'ADD_ORDER',
    payload: order,
  });
  