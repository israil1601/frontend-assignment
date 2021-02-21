import React, { useReducer } from "react";
import api from "../lib/api";
import Container from "@material-ui/core/Container";
import DataTable from "./DataTableContainer";
import useAppState from "../state";

export const App = () => {
  const [currentState, dispatch] = useAppState();
  const { getProjectsDiff, getUsersDiff } = api;

  return (
    <Container className="app" fixed>
      <DataTable currentState={currentState.userData} dispatch={dispatch} fetchDataFromApi={api.getUsersDiff} />

      <DataTable currentState={currentState.projectData} dispatch={dispatch} fetchDataFromApi={api.getProjectsDiff} />
    </Container>
  );
};

export default App;
