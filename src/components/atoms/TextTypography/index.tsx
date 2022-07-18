import { Typography } from "@mui/material";
import React from "react";

interface Text {
  text?: string;
}

const TextTypography = (props: Text) => {
  return (
    <div>
      <Typography>{props.text}</Typography>
    </div>
  );
};

export default TextTypography;
