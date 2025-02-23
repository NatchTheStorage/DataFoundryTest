import { Box } from "@mui/material";
import React, { useState } from "react";
import ServiceRequestForm from "../components/serviceRequestForm";

const ServiceRequestPage = () => {
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

  return (
    <Box>
      <ServiceRequestForm/>
    </Box>
  );
};

export default ServiceRequestPage;
