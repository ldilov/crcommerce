class AuthUserDTO {
	constructor(user) {
		this.displayName = user.displayName;
		this.email = user.email;
		this.uid = user.uid;
		this.createdAt = user.createdAt;
	}
}

export default AuthUserDTO;
