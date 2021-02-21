import { useReducer } from "react";
import {reducer} from './reducer'

const initialState = {
    userData: {
      type: "User",
      data: [],
    },
    projectData: {
      type: "Product",
      data: [],
    },
  };

const useAppState = () => useReducer(reducer, initialState);

export default useAppState;