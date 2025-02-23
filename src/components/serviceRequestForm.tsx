import React, { useEffect, useState } from "react";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ServiceRequest } from "../types";

const ServiceRequestForm = ({ data }) => {
  const [requestName, setRequestName] = useState("");
  const [requestDescription, setRequestDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [severity, setSeverity] = useState("");
  const [reporterName, setReporterName] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (data) {
      setRequestName(data);
    }
    // load the requests from dynamodb
    // when loaded, display in a table
  }, []);

  const handleSubmit = (e) => {};

  const handleChange = (e) => {
    setSeverity(e);
  };

  return (
    <Box>
      <TextField label="Request Name" />
      <TextField multiline fullWidth rows={5} label="Description" />

      <FormControl>
        <TextField title="Creation Date" type="date" />
      </FormControl>
      <FormControl>
        <TextField label="Resolution Date" type="date" />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Severity</InputLabel>
        <Select value={severity} label="Severity" onChange={handleChange}>
          <MenuItem value={"low"}>Low</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"high"}>High</MenuItem>
        </Select>
      </FormControl>
      <TextField label="Reporter Name" />
      <TextField label="Contact Information" />
      <TextField label="Location" />
    </Box>
  );
};

export default ServiceRequestForm;
