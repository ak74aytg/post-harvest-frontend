import axios from "axios";
import React, { useEffect, useState } from "react";
import BarGraph from "./BarGraph";

function DisplayBars(props) {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [graphData, setGraphData] = useState([]);
    
    
  const fetchYears = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/grain-quality/years"
    );
    setYears(result.data);
  };

  const fetchDataForSelectedYear = async (year) => {
    try {
      const result = await axios.get(
        `http://localhost:8080/api/grain-quality?year=${year}`
      );
      setGraphData(result.data)
    } catch (error) {
      console.error("Error fetching data for selected year:", error);
    }
  };

  useEffect(() => {
    fetchYears();
  }, []);

  useEffect(() => {
    if (selectedYear !== "") {
      fetchDataForSelectedYear(selectedYear);
    }
  }, [selectedYear]);

  useEffect(() => {
    fetchDataForSelectedYear(selectedYear);
  }, []);


  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };


  const field_fissures = graphData.map((item) => item.field_fissures);
  const protein_content = graphData.map((item) => item.protein_content);
  const lipid_content = graphData.map((item) => item.lipid_content);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div>
          <div className="flex items-center mr-4">
            <label htmlFor="cultivar" className="mr-2">
              Select Year:
            </label>
            <select
              onChange={handleYearChange}
              value={selectedYear}
              className="px-2 py-1 border rounded"
              id="cultivar"
            >
              <option>year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5 items-center">
        <BarGraph
          x_axis={props.cultivarList}
          y_axis={protein_content}
          name="protein_content"
          borderColor="rgba(255,0,0,1)"
          bgColor="rgba(255,0,0,0.4)"
          className="mb-2"
        />
        <div className="md:flex justify-between">
          <BarGraph
            x_axis={props.cultivarList}
            y_axis={field_fissures}
            name="field_fissures"
            bgColor="rgba(0,0,255,0.4)"
            borderColor="rgba(0,0,255,1)"
            className="mb-4"
          />

          <BarGraph
            x_axis={props.cultivarList}
            y_axis={lipid_content}
            name="lipid_content"
            borderColor="rgba(0,255,0,1)"
            bgColor="rgba(0,255,0,0.4)"
          />
        </div>
      </div>
    </div>
  );
}

export default DisplayBars;
