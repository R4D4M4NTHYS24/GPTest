import { LocarStorageTypes, Person } from "@/models";
import {
  getLocalStorage,
  setLocalStorage,
} from "@/utilities/localstorage.utility";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(LocarStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocarStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocarStorageTypes.FAVORITES, state);
      return action.payload;
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;
