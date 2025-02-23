import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/loginPage";
import ServiceRequestPage from "./pages/serviceRequestPage";
import { Box, Button, TextField } from "@mui/material";
import { useAuth } from "react-oidc-context";
import RequestDisplayPage from "./pages/requestDisplayPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/create-request" element={<ServiceRequestPage />} />
          <Route path="/requests" element={<RequestDisplayPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
