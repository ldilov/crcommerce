import { ACTION_TYPES } from './user.constants';

export const setCurrentUser = (user) => ({
	type: ACTION_TYPES.SET_CURRENT_USER,
	payload: user,
});
