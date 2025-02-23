import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/loginPage";
import ErrorPage from "./pages/errorPage";
import { Box, Button, TextField } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
