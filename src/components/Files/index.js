import React from "react";
import "./files.css";

export default function Files({ files }) {
  let filesData = files.map((file, index) => {
    let store = file;
    store = store.split("/");
    let file_name = store[store.length - 1];
    return (
      <a
        key={index}
        className="file"
        href={file}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="avatar" alt="File Icon" src={file} align="middle" />
        {file_name}
      </a>
    );
  });

  return <div className="files">{filesData}</div>;
}
