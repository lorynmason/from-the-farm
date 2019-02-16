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