import {UserActionTypes, userActionTypes}  from './user.types'

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});
