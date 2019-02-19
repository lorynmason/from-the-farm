export const vendorSearchReducer = (state = [], action) => {
  switch (action.type) {
    case 'VENDOR_SEARCH':
      return action.results;
    default:
      return state;
  }
}

export const productSearchReducer = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCT_SEARCH':
      return action.results;
    default:
      return state;
  }
}

