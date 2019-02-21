export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  };
};

export const removeUser = () => {
  return {
    type: 'REMOVE_USER'
  };
};

export const addVendors = (vendors) => {
  return {
    type: 'ADD_VENDORS',
    vendors
  };
};

export const addProducts = (products) => {
  return {
    type: 'ADD_PRODUCTS',
    products
  };
};

export const isLoading = (bool) => {
  return {
    type: 'IS_LOADING',
    bool
  };
};

export const hasErrored = (message) => {
  return {
    type: 'HAS_ERRORED',
    message
  };
};

export const addMessage = (message) => {
  return {
    type: 'ADD_MESSAGE',
    message
  };
};

export const addItemList = (items) => {
  return {
    type: 'ADD_ITEM_LIST',
    items
  };
};

export const vendorSearchResults = (results) => {
  return {
    type: 'VENDOR_SEARCH',
    results
  };
};

export const productSearchResults = (results) => {
  return {
    type: 'PRODUCT_SEARCH',
    results
  };
};

export const clearSearchResults = () => {
  return {
    type: 'CLEAR_SEARCH'
  };
};
