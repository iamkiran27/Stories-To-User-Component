import React from "react";
import { Typography } from "@mui/material";

interface Text {
  text?: string;
}

const TypographyComponent = (props: Text) => {
  return (
    <div>
      <Typography>{props.text}</Typography>
    </div>
  );
};

export default TypographyComponent;
