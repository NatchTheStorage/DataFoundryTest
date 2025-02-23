import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ServiceRequest } from "../types";
import { useState, useEffect } from "react";

const columns = [
  { id: "id", label: "Id", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "description", label: "Description", minWidth: 100 },
  {
    id: "severity",
    label: "Severity",
    minWidth: 170,
  },
  {
    id: "creationDate",
    label: "Creation Date",
    minWidth: 170,
    align: "right",
  },
  {
    id: "resolutionDate",
    label: "Resolution Date",
    minWidth: 170,
    align: "right",
  },
  {
    id: "reporterName",
    label: "Reporter Name",
    minWidth: 170,
  },
  {
    id: "contactInfo",
    label: "Contact Information",
    minWidth: 170,
  },
  {
    id: "location",
    label: "Location",
    minWidth: 170,
  },
];

const rowOnSelect = () => {
  console.log();
};

const ServiceRequestTable = ({ data }) => {
  const [tableData, setData] = useState<ServiceRequest[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState();

  useEffect(() => {
    setData(data);
    // load the requests from dynamodb
    // when loaded, display in a table
  }, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {data && (
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={data.id}
                      onClick={() => rowOnSelect}
                    >
                      {columns.map((column) => {
                        const value = data[column.id];
                        return <TableCell key={column.id}></TableCell>;
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ServiceRequestTable;
