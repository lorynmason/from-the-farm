import { isLoading, hasErrored, addVendors, addProducts } from '../actions';

export const fetchVendors = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch('https://xpoll-be.herokuapp.com/api/v1/vendors');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false))
      const results = await response.json();
      const vendors = cleanVendors(results.data);
      const products = cleanProducts(results.data);
      dispatch(addVendors(vendors));
      dispatch(addProducts(products));
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export const cleanVendors = (vendors) => {
  return vendors.map( vendor => {
    const { name, address, state, city, phone, email, lat, long, bio } = vendor.attributes
    return {
      name,
      bio,
      address,
      state, 
      city,
      phone,
      email,
      lat,
      long, 
      id: parseInt(vendor.id)
    }
  })
}
  
export const cleanProducts = (vendors) => {
  return vendors.reduce((productArr, vendor) => {
    const { name, products } = vendor.attributes;
    products.reduce((obj, product) => {
      const itemName = Object.keys(product)[0];

      obj = {
        vendorName: name,
        name: Object.keys(product)[0],
        ...product[itemName]
      }
      productArr.push(obj);
      return obj
    }, {})

    return productArr;
  }, [])
}
