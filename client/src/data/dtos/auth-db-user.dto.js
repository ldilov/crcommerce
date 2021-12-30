class AuthUserDbDTO {
  constructor(user) {
    this.displayName = user.displayName;
    this.email = user.email;
    this.password = user.password;
    this.id = user.uid;
    this.createdAt = user.createdAt;
  }
}

export default AuthUserDbDTO;
