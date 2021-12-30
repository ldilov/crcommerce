class GetUserDTO {
  constructor(user, cartItems = []) {
    this.displayName = user.displayName;
    this.email = user.email;
    this.cart = cartItems;
  }
}

export default GetUserDTO;
