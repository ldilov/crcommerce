class FirebaseUserDocumentNotFound extends Error {
  constructor(message, userDocId) {
    super(message);

    this.name = FirebaseUserDocumentNotFound.name;
    this.userDocId = userDocId;

    Error.captureStackTrace(this, FirebaseUserDocumentNotFound);
  }
}

export default FirebaseUserDocumentNotFound;
