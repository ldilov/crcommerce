class FirebaseUserDocumentAlreadyExists extends Error {
	constructor(message, uid) {
		super(message);

		this.name = FirebaseUserDocumentAlreadyExists.name;
		this.userDocId = uid;

		Error.captureStackTrace(this, FirebaseUserDocumentAlreadyExists);
	}
}

export default FirebaseUserDocumentAlreadyExists;
