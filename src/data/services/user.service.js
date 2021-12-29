import AuthUserDbDTO from '../dtos/auth-db-user.dto';
import GetUserDTO from '../dtos/get-user.dto';

import LazyLoader from '../helpers/LazyLoader';

import ServiceCreateUserError from '../errors/service-create-user-error';
import FirebaseUserDocumentAlreadyExists from '../errors/firebase-userdoc-already-exists';

const FirebaseDB = {
  module: () => import('../firebase/db')
};

const load = new LazyLoader(FirebaseDB).import;

class UserService {
  constructor() {}

  async getAllDbUsers() {
    const getAllUsers = await load('getAllUsers');
    const users = await getAllUsers();
    const result = users.map((u) => new AuthUserDbDTO(u));

    return result;
  }

  async getAllUsers() {
    const { getAllUsers } = await load('getAllUsers');
    const users = await getAllUsers();
    const result = users.map((u) => (u ? new GetUserDTO(u) : null)).filter((u) => u !== null);

    return result;
  }

  async getDbUserById(id) {
    const { getUserByDocId } = await load('getUserByDocId');
    const userData = await getUserByDocId(id);
    let result = null;

    if (userData) {
      result = new AuthUserDbDTO(userData);
    }

    return result;
  }

  async getUserById(id) {
    const [getUserByDocId, getUserCartByUserDocId] = await Promise.all([
      load('getUserByDocId'),
      load('getUserCartByUserDocId')
    ]);
    const [userData, cartItems] = await Promise.all([
      getUserByDocId(id),
      getUserCartByUserDocId(id)
    ]);

    let result = null;

    if (userData) {
      result = new GetUserDTO(userData, cartItems);
    }

    return result;
  }

  saveAuthUser = async (authUser, additionalData = null) => {
    const createUserDocument = await load('createUserDocument');
    let result = null;

    if (additionalData) {
      authUser = {
        ...authUser,
        ...additionalData
      };
    }

    try {
      result = await createUserDocument(authUser);
    } catch (error) {
      if (error instanceof FirebaseUserDocumentAlreadyExists) {
        return new AuthUserDbDTO(error.snapshot.data());
      }

      throw new ServiceCreateUserError(error, `Unable to create user document!`);
    }

    if (!result) {
      return;
    }

    const { setDoc, userRef } = result;
    const dbUser = new AuthUserDbDTO(result);

    try {
      await setDoc(userRef, JSON.parse(JSON.stringify(dbUser)));
      return dbUser;
    } catch (error) {
      throw new ServiceCreateUserError(error, `Unable to create user in the database!`);
    }
  };
}

const service = new UserService();
export default service;
