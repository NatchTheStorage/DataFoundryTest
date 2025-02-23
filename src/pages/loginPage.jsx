import {
  Box,
  Button,
  FormGroup,
  FormHelperText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const LoginPage = (loggedIn) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required");
      setL;
      return;
    }
    setError("");
    console.log("Logging in with", email, password);
  };

  return (
    <Box>
      <Box>Images</Box>
      <Box>
        <h1>Data Foundry Portal</h1>
        <p>By Natch Surana</p>
      </Box>
      <Box>
        <TextField label="Username"></TextField>
      </Box>
      <Box>
        <TextField label="Password"></TextField>
      </Box>
      <Box></Box>

      <Button onClick={() => auth.signinRedirect}>Sign In</Button>
    </Box>
  );
};

export default LoginPage;
