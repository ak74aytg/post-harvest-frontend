import React, { useEffect, useState } from "react";
import DataTable from "../Components/Chart/DataTable";
import Graph from "../Components/Chart/Graph";
import Dropdowns from "../Components/Chart/Dropdowns";
import axios from "axios";
import DisplayBars from "../Components/Chart/bar_graph/DisplayBars";
import logo from "../Assests/logo.jpg";

function GrainQuality() {

  const fetchCultivars = async () => {
    const result = await axios.get("http://localhost:8080/api/cultivars");
    setcultivars(result.data);
    // console.log(result.data)
  };

  useEffect(() => {
    fetchCultivars();
    getGraphData(1)
  }, []);

  const [cultivars, setcultivars] = useState([]);
  const [graphData, setGraphData] = useState([]);

  const getGraphData = async (cultivarId) => {
    try {
      const result = await axios.get(
        `http://localhost:8080/api/grain-quality?cid=${cultivarId}`
      );
      setGraphData(result.data);
    } catch (error) {
      console.error();
    }
  };

  return (
    <div className="text-black-800 pt-5" sx={{ "background-color": "#f4f4f4" }}>
      <div className="mt-8 md:px-1 px-5">
        <h1 className="text-center text-xl md:text-3xl font-semibold nav-green mb-5">
          View Grain Quality
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center items-center">
            <img
              src={logo}
              alt="Grain Quality Icon"
              className="w-16 h-16 mr-4"
            />
            <p className="text-lg font-semibold text-gray-800">
              Welcome to our Grain Quality Portal!
            </p>
          </div>
          <p className="text-center mb-8">
            Select a cultivar to view its grain quality metrics over time:
          </p>
          <Dropdowns cultivarList={cultivars} setGraphData={getGraphData} />
          <Graph data={graphData} />
          <div className="border-b-2 border-gray-300 my-8"></div>{" "}
          {/* Separator line */}
          <div className="mb-8">
            <p className="text-lg mb-4 roboto-medium">
              Grain Quality Metrics by Cultivar:
            </p>
            <p className="text-base mb-4">
              Explore grain quality metrics like protein percentage, field
              fissures, and lipid percentage for each cultivar across different
              years. Use the selector to view data for specific years.
            </p>
          </div>
          <DisplayBars cultivarList={cultivars} />
          <div className="border-b-2 border-gray-300 my-8"></div>
          <div className="mb-8">
            <p className="text-lg mb-4 roboto-medium">
              Detailed Grain Quality Data:
            </p>
            <p className="text-base mb-4">
              View the complete dataset including all grain quality properties
              for each cultivar and year. Use the table to analyze specific
              values and trends for further insights.
            </p>
          </div>
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default GrainQuality;
