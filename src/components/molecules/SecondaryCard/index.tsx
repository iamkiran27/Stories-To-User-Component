import { Card, CardHeader, Grid } from "@mui/material";
import React from "react";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface SecondaryCardProps {
  text?: string;
  image?: string;
  title?: string;
  value?: string;
}
const SecondaryCard = (props: SecondaryCardProps) => {
  return (
    <Card>
      <CardHeader>
        <TextTypography />
      </CardHeader>
      <Grid>
        <Grid item>
          <IconImage />
          <TextTypography />
          <TextTypography />
        </Grid>
      </Grid>
    </Card>
  );
};

export default SecondaryCard;
