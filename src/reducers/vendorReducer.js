export const vendorReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_VENDORS':
      return action.vendors;
    default: 
      return state;
  }
}