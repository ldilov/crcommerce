class FirebaseUserDocumentAlreadyExists extends Error {
	constructor(...args) {
		super(...args);

		this.userDocId = args[1];

		Error.captureStackTrace(this, FirebaseUserDocumentAlreadyExists);
	}
}

export default FirebaseUserDocumentAlreadyExists;
