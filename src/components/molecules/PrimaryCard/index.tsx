import { Box, Card, Grid } from "@mui/material";
import React from "react";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface PrimaryCardProps {
  image?: string;
  title?: string;
  abbrevation?: string;
  value?: number;
  differenceMargin?: number;
}

const PrimaryCard = (props: PrimaryCardProps) => {
  return (
    <Card>
      <Grid>
        <Grid item>
          <IconImage />
          <TextTypography />
          <TextTypography />

          <Box>
            <TextTypography />
            <TextTypography />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PrimaryCard;
