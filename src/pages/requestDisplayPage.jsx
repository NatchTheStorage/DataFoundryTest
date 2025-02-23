import { Box, Table } from "@mui/material";
import React, { useEffect, useState } from "react";

const RequestDisplayPage = () => {
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // load the requests from dynamodb
    // when loaded, display in a table
  }, []);
  return (
    <Box>
      Table
      {loaded && <Box></Box>}
    </Box>
  );
};

export default RequestDisplayPage;
