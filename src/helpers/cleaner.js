const formatPhoneNumber = (num) => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return num.toString().replace(phoneRegex, "($1) $2-$3")
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

export const cleanVendors = (vendors) => {
  return vendors.map( vendor => {
    const { name, address, state, city, phone, email, lat, long, bio } = vendor.attributes
    const formattedNum = formatPhoneNumber(phone)
    return {
      name,
      bio,
      address,
      state, 
      city,
      phone: formattedNum,
      email,
      lat,
      long, 
      id: parseInt(vendor.id)
    }
  })
}

export const cleanUser = (data, token) => {
  const products = cleanUserProducts(data.attributes.products)
  const { name, email, address, phone, bio, lat, long, city, state, zip, img_url } = data.attributes
  return {
    name, 
    email, 
    address, 
    phone: formatPhoneNumber(phone), 
    bio, 
    lat, 
    long, 
    city, 
    state, 
    zip, 
    img_url,
    products, 
    token
  }
}

export const cleanUserProducts = (products) => {
  const productArr = []
  products.reduce((obj, product) => {
    const itemName = Object.keys(product)[0];
    obj = {
      name: Object.keys(product)[0],
      ...product[itemName]
    }
    productArr.push(obj);
    return obj
  }, {})
  return productArr
}

export const cleanItems = (products) => {
  const productNames = products.reduce((arr, product) => {
    if(!arr.includes(product.name)) {
      arr.push(product.name)
    }
    return arr     
  },[]);

  const productIds = products.reduce((arr, product) => {
    if(!arr.includes(product.item_id)) {
      arr.push(product.item_id)
    }
    return arr     
  },[]);

  return productNames.map((name, i) => {
    return {
      name,
      id: productIds[i]
    }
  });
}