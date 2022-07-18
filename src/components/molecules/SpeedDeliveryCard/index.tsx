import {  Card, Grid, CardHeader } from "@mui/material";
import React from "react";

import TextTypography from "../../atoms/TextTypography";
import Dropdown from "../Dropdown";

const SpeedDeliveryCard = () => {
  return (
    <Card>
      <CardHeader>
        <TextTypography />
      </CardHeader>
      <Grid>
        <Grid item>
      <Dropdown/>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SpeedDeliveryCard;
