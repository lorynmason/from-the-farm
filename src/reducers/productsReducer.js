const products = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PRODUCTS':
      return action.products;
    default: 
      return state;
  }
}

export default products;