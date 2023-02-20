import React, { useEffect } from "react";
import { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "@/redux/states/favorites";
import { addPeople } from "@/redux/states";
import store, { AppStore } from "@/redux/store";
import { PeopleTable } from "./components";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);
  return <PeopleTable />;
};

export default Home;
