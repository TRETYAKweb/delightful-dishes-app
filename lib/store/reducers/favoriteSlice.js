import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    ids: []
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.ids.push(action.payload);
        },

        removeFavorite(state, action) {
            state.ids = state.ids.filter(id => id !== action.payload);
        }
    }
})

export const actionsFavorite = {
    addFavorite: favoriteSlice.actions.addFavorite,
    removeFavorite: favoriteSlice.actions.removeFavorite
}

export default favoriteSlice.reducer