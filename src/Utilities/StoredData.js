const addToDb = (_id) => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity

  const quantity = shoppingCart[_id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[_id] = newQuantity;
  } else {
    shoppingCart[_id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
  let shoppingCart = {};
  // get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeFromDb = (_id)=> {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
  const shoppingCart = JSON.parse(storedCart);
  if(_id in shoppingCart){
    delete shoppingCart[_id];
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
  }
    }
}

const deletedShoppingCart = ()=> {
    localStorage.removeItem('shopping-cart')
}

export {
    addToDb, getStoredCart, removeFromDb,deletedShoppingCart
}
