export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  }
}

export const removeUser = (id) => {
  return {
    type: 'REMOVE_USER',
    id
  }
}

export const addVendors = (vendors) => {
  return {
    type: 'ADD_VENDORS',
    vendors
  }
}

export const addProducts = (products) => {
  return {
    type: 'ADD_PRODUCTS',
    products
  }
}

export const isLoading = (bool) => {
  return {
    type: 'IS_LOADING',
    bool
  }
}

export const hasErrored = (message) => {
  return {
    type: 'HAS_ERRORED',
    message
  }
}