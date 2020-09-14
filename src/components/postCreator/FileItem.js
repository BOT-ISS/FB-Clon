import React from "react";

const FileItem = ({ file }) => {
  const urlFromFile = URL.createObjectURL(file);
  return (
    <li>
      <button type="button">⨯</button>
      <img src={urlFromFile} />
    </li>
  );
};

export default FileItem;
