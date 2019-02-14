export const cleanVendors = (vendors) => {
  return vendors.map( vendor => {
    const { name, address, phone, email, lat, long } = vendor.attributes
    return {
      name,
      address,
      phone,
      email,
      lat,
      long
    }
  })
}

const cleanProducts = (products) => {

}