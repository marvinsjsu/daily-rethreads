
export const UserActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const UserActions = {
    setCurrentUser: (user) => ({
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user,
    }),
};
