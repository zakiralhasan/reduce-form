import { actionTypes } from "./actionTypes";

export const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    education: '',
    quantity: 0,
    textArea: '',
    agree: false
}
export const reducer = (state, action) => {
    // if (action.type === "INPUT") {
    //     return {
    //         ...state,
    //         [action.payload.name]: action.payload.value,
    //     }
    // }

    switch (action.type) {
        // case "INPUT":
        case actionTypes.INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        // case "TOGGLE":
        case actionTypes.TOGGLE:
            return {
                ...state,
                agree: !state.agree,
            }
        // case "INCREAMENT":
        case actionTypes.INCREAMENT:
            return {
                ...state,
                quantity: state.quantity + 1,
            }
        // case "DECREAMENT":
        case actionTypes.DECREAMENT:
            return {
                ...state,
                quantity: state.quantity - 1,
            }
        default: return state;
    }
}