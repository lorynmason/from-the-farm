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
