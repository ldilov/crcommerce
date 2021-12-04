class FirebaseCreateAuthUserError extends Error {
	constructor(message, innerError) {
		super(message);

		this.name = FirebaseCreateAuthUserError.name;
		this.innerError = innerError;

		Error.captureStackTrace(this, FirebaseCreateAuthUserError);
	}
}

export default FirebaseCreateAuthUserError;
