// Dropdowns.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Dropdowns(props) {
  const [currentCultivar, setCurrentCultivar] = useState({});

  useEffect(() => {
    const fetchCultivars = async () => {
      const result = await axios.get("http://localhost:8080/api/cultivars");
      setCurrentCultivar(result.data[0]);
    };
    fetchCultivars();
}, [])
  
  

  const onChangeHandler = (e) => {
    const id = e.target.value;
    props.setGraphData(id);
    setCurrentCultivar(props.cultivarList.filter((item) => item.id == id)[0]);
  }


  return (
    <div className="flex justify-center mt-4">
      <div>
        <div className="flex items-center mr-4">
          <label htmlFor="cultivar" className="mr-2">
            Select Cultivar:
          </label>
          <select
            onChange={onChangeHandler}
            className="px-2 py-1 border rounded"
            id="cultivar"
          >
            {props.cultivarList.map((cultivar) => (
              <option key={cultivar.id} value={cultivar.id}>
                {cultivar.id}
              </option>
            ))}
          </select>
        </div>
        <TableContainer className="bg-white my-1" sx={{ "max-width": "300px" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">{currentCultivar.id}</TableCell>
                <TableCell align="right">{currentCultivar.name}</TableCell>
                <TableCell align="right">{currentCultivar.type}</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Dropdowns;
