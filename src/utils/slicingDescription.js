import React from "react";

const slicingDescription = (text, length = 200) => {
  if (text.length < length) {
    return text;
  } else {
    return text.slice(0, length) + "...";
  }
};

export default slicingDescription;
