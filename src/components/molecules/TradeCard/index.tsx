import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface Trade {
  icon?: string;
  title?: string;
  abbrevation?: string;
  price?: number;
  change?: string;
  marketCap?: string;
  watch?: boolean;
}

const TradeCard = (props: Trade) => {
  return (
    <Card>
      <Grid>
        <Grid item>
          <IconImage />
          <Box>
            <TextTypography />
            <TextTypography />
          </Box>
          <TextTypography />
          <TextTypography /> <TextTypography />
          {props.watch ? <IconImage /> : <IconImage />}
        </Grid>
      </Grid>
    </Card>
  );
};

export default TradeCard;
