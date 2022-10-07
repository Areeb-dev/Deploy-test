import { LANGUAGE } from "../types"
// const initialState = "english"

const langReducer = (state = { language: 'english' }, action) => {
    switch (action.type) {
        case LANGUAGE: {
            return { ...state, language: action.language }
        }
        default: {
            return state
        }
    }
}
export default langReducer