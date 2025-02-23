import React, { useState } from "react";

import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const ServiceRequestForm = () => {
  const [requestName, setRequestName] = useState("");
  const [requestDescription, setRequestDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [severity, setSeverity] = useState("");
  const [reporterName, setReporterName] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }
    setError("");
    console.log("Logging in with", email, password);
  };

  const handleChange = (e) => {
    setSeverity(e)
  }

  return (
    <Box>
      <TextField label="Request Name"/>
      <TextField multiline fullWidth rows={5} label="Description"/>
      
      <FormControl>
        <TextField title="Creation Date" type="date"/>
      </FormControl>
      <FormControl>
<TextField label="Resolution Date" type="date"/>
      </FormControl>
      

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Severity</InputLabel>
        <Select
          value={severity}
          label="Severity"
          onChange={handleChange}
        >
          <MenuItem value={'low'}>Low</MenuItem>
          <MenuItem value={'medium'}>Medium</MenuItem>
          <MenuItem value={'high'}>High</MenuItem>
        </Select>
      </FormControl>
      <TextField label="Reporter Name"/>
      <TextField label="Contact Information"/>
      <TextField label="Location"/>
    </Box>
  );
};

export default ServiceRequestForm;
