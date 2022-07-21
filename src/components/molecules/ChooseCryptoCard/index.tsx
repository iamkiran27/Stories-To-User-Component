import { Card, Grid } from "@mui/material";
import React from "react";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface Props {
  image?: string;
  title?: string;
  value?: string;
}

const ChooseCryptoCard = (props: Props) => {
  return (
    <Card>
      <Grid>
        <Grid item>
          <IconImage icon={props.image} />
          <TextTypography text={props.title} />
          <TextTypography text={props.value} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ChooseCryptoCard;
