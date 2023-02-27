const addToDb = (_id) => {
  let toolsCart = {};

  const storedCart = localStorage.getItem("tools-cart");
  if (storedCart) {
    toolsCart = JSON.parse(storedCart);
  }

  // add quantity

  const quantity = toolsCart[_id];
  if (quantity) {
    const newQuantity = quantity + 1;
    toolsCart[_id] = newQuantity;
  } else {
    toolsCart[_id] = 1;
  }

  localStorage.setItem("tools-cart", JSON.stringify(toolsCart));
};

const getStoredCart = () => {
  let toolsCart = {};
  // get the shopping cart from local storage
  const storedCart = localStorage.getItem("tools-cart");
  if (storedCart) {
    toolsCart = JSON.parse(storedCart);
  }
  return toolsCart;
};

const removeFromDb = (_id)=> {
  

    const storedCart = localStorage.getItem('tools-cart');
    if(storedCart){
  const toolsCart = JSON.parse(storedCart);
  if(_id in toolsCart){
    delete toolsCart[_id];
    localStorage.setItem('tools-cart', JSON.stringify(toolsCart))
  }
    }
}

const deletedtoolsCart = ()=> {
    localStorage.removeItem('tools-cart')
}

export {
    addToDb, getStoredCart, removeFromDb,deletedtoolsCart
}
