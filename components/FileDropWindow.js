import React, { useState } from "react";
import FileUploadComponent from "./FileUploadComponent";

function FileDropWindow({ onFilesDropped, children }) {
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const fileList = Array.from(files);
    setDroppedFiles((prevDroppedFiles) => [...prevDroppedFiles, ...fileList]);
    onFilesDropped(fileList);
  };

  return (
    <div
      style={{ width: "100%", height: "100%", border: "2px solid black" }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className=""
    >
      <ul>
        {droppedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}

export default FileDropWindow;
