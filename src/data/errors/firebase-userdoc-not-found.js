class FirebaseUserDocumentNotFound extends Error {
	constructor(...args) {
		super(args);

		this.userDocId = args[1];

		Error.captureStackTrace(this, FirebaseUserDocumentNotFound);
	}
}

export default FirebaseUserDocumentNotFound;
