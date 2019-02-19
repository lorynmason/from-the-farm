export const productsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PRODUCTS':
      return action.products;
    default: 
      return state;
  }
}
