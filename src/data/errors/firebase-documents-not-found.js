class FirebaseDocumentsNotFound extends Error {
	constructor(...args) {
		super(...args);
		Error.captureStackTrace(this, FirebaseDocumentsNotFound);
	}
}

export default FirebaseDocumentsNotFound;
