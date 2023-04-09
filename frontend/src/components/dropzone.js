import React from "react";
import { useDropzone } from "react-dropzone";
import "./dropzone.css";

export const FilesDropzone = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  return (
    <div
      style={{ width: "400px", height: "300px" }}
      className="dropzone-div"
      {...getRootProps()}
    >
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
            Drag and drop some files here, or click to select files
          </p>
        )}
      </div>
    </div>
  );
};
