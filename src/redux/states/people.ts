import { LocarStorageTypes, Person } from "@/models";
import {
  getLocalStorage,
  setLocalStorage,
} from "@/utilities/localstorage.utility";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: "people",
  initialState: getLocalStorage(LocarStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(LocarStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(LocarStorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});

export const { addPeople } = peopleSlice.actions;
