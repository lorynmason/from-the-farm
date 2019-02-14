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

export const cleanProducts = (products) => {
  return products.map( product => {
    const { name, products} = product.attributes
    return {
      vendor_name: name,
      products
    }
  })
}