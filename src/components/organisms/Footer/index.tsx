import { Grid } from "@mui/material";
import React from "react";
import IconButton from "../../atoms/IconButton";
import TextTypography from "../../atoms/TextTypography";
import Dropdown from "../../molecules/Dropdown";

const Footer = () => {
  return (
    <Grid>
      <Grid item>
        <TextTypography />
        <TextTypography />

        <TextTypography />

        <TextTypography />
        <Dropdown />
        <IconButton handleClick={() => {}} />
      </Grid>
    </Grid>
  );
};

export default Footer;
