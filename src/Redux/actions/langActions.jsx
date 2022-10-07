import { LANGUAGE } from "../types"
const selectLang = (language) => {
    return {
        type: LANGUAGE,
        language
    }
}


export {
    selectLang
}