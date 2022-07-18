import { Box, Card, Grid } from "@mui/material";
import React from "react";
import Graph from "../../atoms/Graph";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface Props {
  image?: string;
  title?: string;
  value?: string;
  time?: string;
  grpahData?: any;

  graphColor?: string;
}
const GraphCard = (props: Props) => {
  return (
    <Card>
      <Grid>
        <Grid item>
          <IconImage />
          <Box>
            <TextTypography />
            <TextTypography />
            <TextTypography />
          </Box>
          <Graph />
        </Grid>
      </Grid>
    </Card>
  );
};

export default GraphCard;
