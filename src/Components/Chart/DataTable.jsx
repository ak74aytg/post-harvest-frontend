// DataTable.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function DataTable() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/grain-quality");
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="container mx-auto py-8">
      <h2 className="text-lg font-semibold mb-4">
        Grain Quality Metrics Table
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell>Cultivar</TableCell>
              <TableCell>Pureline/Hybrid</TableCell>
              <TableCell>Grain Size</TableCell>
              <TableCell>Field Fissures (%)</TableCell>
              <TableCell>Total Protein Content (%)</TableCell>
              <TableCell>Total Lipid Content (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .sort((a, b) => a.year - b.year)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.year}
                  </TableCell>
                  <TableCell>{item.cultivars.id}</TableCell>
                  <TableCell>{item.cultivars.type}</TableCell>
                  <TableCell>{item.grain_size}</TableCell>
                  <TableCell>{item.field_fissures}</TableCell>
                  <TableCell>{item.protein_content}</TableCell>
                  <TableCell>{item.lipid_content}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataTable;
