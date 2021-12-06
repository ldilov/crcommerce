class FirebaseDocumentsNotFound extends Error {
  constructor(...args) {
    super(...args);

    this.name = FirebaseDocumentsNotFound.name;

    Error.captureStackTrace(this, FirebaseDocumentsNotFound);
  }
}

export default FirebaseDocumentsNotFound;
