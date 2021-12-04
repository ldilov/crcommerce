import AuthUserDbDTO from '../dtos/auth-db-user.dto';
import GetUserDTO from '../dtos/get-user.dto';
import {
	getAllUsers,
	getUserByDocId,
	getUserCartByUserDocId,
	createUserDocument,
} from '../firebase/db';

class UserService {
	constructor() {}

	async getAllDbUsers() {
		const users = await getAllUsers();
		const result = users.map((u) => new AuthUserDbDTO(u));

		return result;
	}

	async getAllUsers() {
		const users = await getAllUsers();
		const result = users
			.map((u) => (u ? new GetUserDTO(u) : null))
			.filter((u) => u !== null);

		return result;
	}

	async getDbUserById(id) {
		const userData = await getUserByDocId(id);
		let result = null;

		if (userData) {
			result = new AuthUserDbDTO(userData);
		}

		return result;
	}

	async getUserById(id) {
		const [userData, cartItems] = await Promise.all([
			getUserByDocId(id),
			getUserCartByUserDocId(id),
		]);

		let result = null;

		if (userData) {
			result = new GetUserDTO(userData, cartItems);
		}

		return result;
	}

	async saveAuthUser(authUser) {
		const result = await createUserDocument(authUser);

		if (!result) {
			return;
		}

		const { setDoc, userRef } = result;
		const dbUser = new AuthUserDbDTO(result);

		try {
			await setDoc(userRef, JSON.parse(JSON.stringify(dbUser)));
		} catch (error) {
			throw new Error(`Unable to create user:\n${error}`);
		}
	}
}

const service = new UserService();
export default service;
