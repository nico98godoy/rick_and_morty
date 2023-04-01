import { ADD_FAVORITE, DELETE_FAVORITE } from "./Actions";

const initialState = {
    myFavorites:[]
}

const rootReducer = ( state = initialState, {type, payload} ) => {
    switch(type){
        case ADD_FAVORITE: return{
            ...state,
            myFavorites: [...state.myFavorites, payload]
        }
        case DELETE_FAVORITE: return{
            ...state,
            myFavorites: state.myFavorites.filter( (char) => char.id !== payload ),
        }
        default: return {...state}
    }
}

export default rootReducer;