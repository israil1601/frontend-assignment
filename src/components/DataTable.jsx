import React from "react";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { getDateFromTimestamp } from "../utils";

const DataTable = ({ data, errorMessage, fetchData, isLoading, type, direction, setDirection }) => {
  return (
    <Paper className="container">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                  <TableSortLabel 
                    direction={direction}
                    onClick={() => direction === "asc" ? setDirection("desc") : setDirection("asc")}
                    active={true}
                  />
                  Date
                  </TableCell>
              <TableCell>{type} ID</TableCell>
              <TableCell>Old value</TableCell>
              <TableCell>New value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(({ id, timestamp, diff }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {getDateFromTimestamp(timestamp)}
                </TableCell>
                <TableCell>{id}</TableCell>
                <TableCell>{diff[0].oldValue}</TableCell>
                <TableCell>{diff[0].newValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height={80}
                >
                  {isLoading ? (
                    <CircularProgress />
                  ) : (
                    <Box textAlign="center">
                      {errorMessage.length > 0 && (
                        <Typography color="error">{errorMessage}</Typography>
                      )}
                      <Button
                        onClick={fetchData}
                        variant="contained"
                        color="primary"
                      >
                        {errorMessage ? "Retry" : "Load more"}
                      </Button>
                    </Box>
                  )}
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DataTable;
