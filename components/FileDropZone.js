import React, { useState } from "react";
import FileItem from "./FileItem";
function FileDropZone({ handleGetLinkClick, handleFileUpload, selectedFiles }) {
  const handleFilesSelect = (event) => {
    const fileList = Array.from(event.target.files);
    handleFileUpload(fileList);
  };
  const handleSelectFilesClick = () => {
    // Trigger the file input element when the "Select files" button is clicked
    document.getElementById("file-input").click();
  };

  const handleSelectFoldersClick = () => {
    // Trigger the file input element with the "webkitdirectory" attribute when the "Select folders" button is clicked
    document.getElementById("folder-input").click();
  };

  return (
    <div className="flex flex-col w-full md:basis-1/3">
      <div className="uppercase text-yellow-700 flex flex-col w-full justify-start">
        <button
          className="uppercase flex items-start"
          onClick={handleSelectFilesClick}
        >
          Select files
        </button>
        <span className="uppercase flex items-center justify-center text-2xl">
          OR
        </span>
        <button
          className="uppercase flex justify-end"
          onClick={handleSelectFoldersClick}
        >
          Select folders
        </button>
      </div>

      <input
        id="file-input"
        type="file"
        multiple
        onChange={handleFilesSelect}
        style={{ display: "none" }}
      />
      <input
        id="folder-input"
        type="file"
        multiple
        directory
        webkitdirectory
        onChange={handleFilesSelect}
        style={{ display: "none" }}
      />

      {selectedFiles.map((file, index) => (
        <FileItem key={index} file={file} />
      ))}

      {selectedFiles.length > 0 && (
        <div className="mt-2 text-center">
          <button
            className="text-yellow-700 text-xl py-2 px-4 rounded uppercase tracking-[4px] text-center"
            onClick={handleGetLinkClick}
          >
            Get a Link
          </button>
        </div>
      )}
    </div>
  );
}

export default FileDropZone;
