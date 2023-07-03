import React, { useState } from "react";
import FileDropZone from "./FileDropZone";
import SelectedFilesList from "./SelectedFilesList";
import FileDropWindow from "./FileDropWindow";
function FileUploadComponent() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showLinkInfo, setShowLinkInfo] = useState(false);

  function handleFileUpload(acceptedFiles) {
    setSelectedFiles((prevSelectedFiles) => [
      ...prevSelectedFiles,
      ...acceptedFiles,
    ]);
  }

  function handleGetLinkClick() {
    setShowLinkInfo(true);
  }

  return (
    <div className="flex p-2 container items-center w-full h-4/5 mx-auto flex-col md:flex-row">
      <div className="w-2/5 bg-black h-3/5 mr-2">
        <FileDropWindow onFilesDropped={handleFileUpload}>
          <FileDropZone
            handleGetLinkClick={handleGetLinkClick}
            selectedFiles={selectedFiles}
            handleFileUpload={handleFileUpload}
          />
        </FileDropWindow>
      </div>

      {showLinkInfo && <SelectedFilesList selectedFiles={selectedFiles} />}
    </div>
  );
}

export default FileUploadComponent;
