export const cleanVendors = (vendors) => {
  return vendors.map( vendor => {
    const { name, address, phone, email, lat, long } = vendor.attributes
    return {
      name,
      address,
      phone,
      email,
      lat,
      long, 
      id: vendor.id
    }
  })
}

export const cleanProducts = (vendors) => {
  return vendors.reduce((productArr, vendor) => {
    const { name, products } = vendor.attributes;
    const productNames = products.reduce((obj, product) => {
      const name = Object.keys(product)[0];

      obj = {
        name: Object.keys(product)[0],
        ...product[name]
      }
      productArr.push(obj);
      return obj
    }, {})

    return productArr;
  }, [])
}