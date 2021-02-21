import React, { useState, useEffect } from "react";
import { sortDataByTimestamp } from "../utils";
import DataTable from "./DataTable";

const DataTableContainer = ({ currentState, dispatch, fetchDataFromApi }) => {
  const { type, data } = currentState;
  const [errorMessage, setErrorMessage] = useState("");
  const [currentOrder, setCurrentOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = () => {
    setIsLoading(true);

    fetchDataFromApi()
      .then((response) => {
        dispatch({
          type: `ADD_${type.toUpperCase()}_DATA`,
          payload: response.data,
        });

        setIsLoading(false);
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage(
          "We had problems fetching your data. Please try again."
        );
        setIsLoading(false);
      });
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataTable
      data={sortDataByTimestamp(data, currentOrder)}
      errorMessage={errorMessage}
      fetchData={fetchData}
      isLoading={isLoading}
      type={type}
      direction={currentOrder}
      setDirection={setCurrentOrder}
    />
  );
};

export default DataTableContainer;
