const mutateCartItemQuantity = (cartItems, item, mutator) => {
  return cartItems.map((cartItem) =>
    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + mutator } : cartItem
  );
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (existingCartItem) {
    return mutateCartItemQuantity(cartItems, cartItemToAdd, 1);
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToDecrease.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
  }

  return mutateCartItemQuantity(cartItems, itemToDecrease, -1);
};
