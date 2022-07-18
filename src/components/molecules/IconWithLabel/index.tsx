import { Grid } from "@mui/material";
import React from "react";
import IconImage from "../../atoms/IconImage/indes";
import TypographyComponent from "../../atoms/Typography";


interface Props {
    iconImage : string;
    text? : string;
}
const IconWithLabel = (props : Props) => {
  return <div>
    <Grid>
        <Grid item>
            <IconImage/>
            <TypographyComponent/>
        </Grid>
    </Grid>

  </div>;
};

export default IconWithLabel;
