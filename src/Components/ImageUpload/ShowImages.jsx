import axios from "axios";
import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";

function ShowImages({ change, setChange }) {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetchImageData();
    setChange(false);
    console.log("show images api count");
  }, [change]);

  const fetchImageData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/images");
      console.log(response.data);
      setImageData(response.data);
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };

  return (
    <Grid container spacing={4} className="p-4">
      {imageData.map((item) => (
        <Grid item xs={12} key={item.id}>
          <Typography variant="h6" component="h2" className="mb-2">
            {item.category}
          </Typography>
          <Grid container spacing={2}>
            {item.images.map((image) => (
              <Grid item key={image} xs={12} sm={6} md={4} lg={3}>
                <div className="rounded flex justify-center border w-60 h-80 p-2">
                  <img
                    src={`http://localhost:8080/api/images/${image}`}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default ShowImages;
