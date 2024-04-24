import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, TextField } from "@mui/material";
import axios from "axios";

function ImageUpload({change}) {
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    if (files.length > 0) {
      formData.append("image", files[0]);
      formData.append("category", category);

      try {
        const response = await axios.post(
          "http://localhost:8080/api/images/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Response:", response.data);
        change(true);
        setFiles([]);
        alert("Upload successful!");
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Error uploading file");
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
      <>
        <div
          {...getRootProps()}
          className="w-2/3 mb-5 p-10 border-dashed border-4 border-gray-300 py-20 text-center cursor-pointer"
        >
          <input {...getInputProps()} />
          <p className="text-3xl font-bold mb-2">
            Click to Upload and share your images.
          </p>
          <p>
            Drag and drop anywhere you want and start uploading your images now.
          </p>

          <div className="mt-4 flex justify-center mb-4">
            {files.map((file) => (
              <div key={file.name}>
                <img
                  src={file.preview}
                  alt="preview"
                  style={{ width: "200px", height: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <TextField
            fullWidth
            label="Enter image categories"
            variant="outlined"
            value={category}
            onChange={handleCategoryChange}
            className="mt-4"
            placeholder="e.g., nature, urban, food"
          />
        </div>
        <Button variant="contained" onClick={handleUpload} component="span">
          Upload
        </Button>
      </>
    );
}

export default ImageUpload;
