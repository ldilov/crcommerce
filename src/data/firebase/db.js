import { firestore } from './app';
import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc } from 'firebase/firestore';
import FirebaseUserDocumentAlreadyExists from '../errors/firebase-userdoc-already-exists';
import FirebaseDocumentsNotFound from '../errors/firebase-documents-not-found';
import FirebaseUserDocumentNotFound from '../errors/firebase-userdoc-not-found';

export const getUserByDocId = async (id) => {
  const fetchedDoc = await getDoc(doc(firestore, 'users', id));
  if (fetchedDoc.exists()) {
    const userData = fetchedDoc.data();
    return userData;
  }

  throw new FirebaseUserDocumentNotFound(`Document with id ${id} was not found!`, id);
};

export const getUserCartByUserDocId = async (id) => {
  const qry = query(collection(firestore, `users/${id}`, 'cartItems'));
  const fetchedCart = await getDocs(qry);

  const cartItems = [];
  fetchedCart.forEach((doc) => {
    cartItems.push(doc.data());
  });

  return cartItems;
};

export const getAllUsers = async () => {
  const qry = query(collection(firestore, 'users'));
  const fetchedDocs = await getDocs(qry);

  const docs = [];

  fetchedDocs.forEach((doc) => {
    docs.push(doc.data());
  });

  if (fetchedDocs.length <= 0) {
    throw new FirebaseDocumentsNotFound(`No documents were found!`);
  }

  return docs;
};

export const createUserDocument = async (authUser) => {
  if (!authUser) {
    return;
  }

  const userRef = doc(firestore, `users`, authUser.uid);
  const userSnapshot = await getDoc(userRef);

  if (userSnapshot.exists()) {
    throw new FirebaseUserDocumentAlreadyExists(
      `User with id ${authUser.uid} already exists!`,
      authUser.uid,
      userSnapshot
    );
  }

  const createdAt = new Date();
  const { email, displayName } = authUser;

  return {
    displayName,
    email,
    createdAt,
    userRef,
    setDoc
  };
};

export const getCollecitonOnSnapshot = (callback) => {
  return onSnapshot(collection(firestore, 'collections'), callback);
};
