import { Button, ButtonProps, Typography } from "@mui/material";
import React from "react";

interface buttonProps extends ButtonProps {
  handleClick: () => void;
  childernWidth?: string;
  textVariant?: string;
}

const IconButton = (props: buttonProps) => {
  return (
    <div>
      <Button
        onClick={props.handleClick}
        variant={props.variant}
        disableElevation
        sx={{ ...props.sx }}
      >
        {props.startIcon}
        {props.children && <Typography sx={{}}>{props.children}</Typography>}
        {props.endIcon}
      </Button>
    </div>
  );
};

export default IconButton;
