class ServiceCreateUserError extends Error {
	constructor(innerError, message) {
		super(message);

		this.name = ServiceCreateUserError.name;
		this.innerError = innerError;
	}
}

export default ServiceCreateUserError;
