
import { UserActionTypes } from "../actions/user.actions";

const initialState = {
    currentUser: null,
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case UserActionTypes.SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: payload,
            };
        }
        default: {
            return state;
        }
    }

};

export default reducer;
