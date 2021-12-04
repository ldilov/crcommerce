class FirebaseUserDocumentAlreadyExists extends Error {
	constructor(message, uid, snapshot = null) {
		super(message);

		this.name = FirebaseUserDocumentAlreadyExists.name;
		this.userDocId = uid;
		this.snapshot = snapshot;

		Error.captureStackTrace(this, FirebaseUserDocumentAlreadyExists);
	}
}

export default FirebaseUserDocumentAlreadyExists;
