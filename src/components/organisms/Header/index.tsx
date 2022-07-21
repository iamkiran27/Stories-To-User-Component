import { Grid } from "@mui/material";
import React from "react";
import IconButton from "../../atoms/IconButton";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";
interface HeaderProps {
  title?: string;
  handleSellButton: () => void;
  handleBuyButton: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <Grid>
      <Grid item>
        <IconImage />
        <TextTypography text={props.title} />
        <IconButton handleClick={props.handleSellButton} />
        <IconButton handleClick={props.handleBuyButton} />
        <IconImage />
        <IconImage />
      </Grid>
    </Grid>
  );
};

export default Header;
