import { combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from './favoriteSlice'


export const rootReducer = combineReducers({
    favorite: favoritesReducer
})