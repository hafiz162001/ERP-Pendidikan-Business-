import React from "react";

const base64RemoveMime = (file) => {
  return file.split(",")[1];
};

export default base64RemoveMime;
