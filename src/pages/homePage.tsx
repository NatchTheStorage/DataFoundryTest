import { Box, Button, Table } from "@mui/material";
import React, { useEffect, useState } from "react";
import ServiceRequestTable from "../components/serviceRequestTable";
import ServiceRequestForm from "../components/serviceRequestForm";
import { ServiceRequest } from "../types";

const testData: ServiceRequest[] = [
  {
    id: "1",
    name: "test",
    description: "test description",
    severity: "High",
    creationDate: "2/2/2022",
    resolutionDate: "3/3/2023",
    reporterName: "Test Name",
    contactInfo: "0444444444",
    location: "Melbourne",
  },
  {
    id: "2",
    name: "test2",
    description: "test description",
    severity: "High",
    creationDate: "2/2/2022",
    resolutionDate: "3/3/2023",
    reporterName: "Test Name",
    contactInfo: "0444444444",
    location: "Melbourne",
  },
];

const HomePage = () => {
  const [data, setData] = useState<ServiceRequest[]>(testData);
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState("");
  const [currentRequest, setCurrentRequest] = useState();

  useEffect(() => {
    setData(testData);

    setLoaded(true);
    // load the requests from dynamodb
    // when loaded, display in a table
    console.log(data);
  }, []);
  return (
    <Box>
      {loaded && (
        <Box>
          <Button>Edit</Button>
          <ServiceRequestTable data={data} />
          {currentRequest && <ServiceRequestForm data={currentRequest} />}
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
