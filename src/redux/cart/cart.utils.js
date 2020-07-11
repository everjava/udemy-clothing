export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  //verifica se o novo item ja esta incluido no carItems
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } //adicionar no array carItems o atributo quantity +1, e cria novo array
        : cartItem
    );
  }

  //se nao existe o item no carItems, add o primeiro
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};


 

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }//retorna o array inicial mais o qtty atualizado
      : cartItem
  );
};