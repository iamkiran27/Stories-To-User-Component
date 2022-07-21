import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";


interface RecentTransactionsProps {
  date? : string;
  icon? : string;
  title?   : string;
  description ? :string;
  value? : number
  balance? : number;
}

const RecentTransactionsCard = (props : RecentTransactionsProps) => {
  return <Card>
    <Grid>
      <Grid item>
        <TextTypography/>
        <IconImage/>
        <Box>
          <TextTypography/>
          <TextTypography/>
        </Box>
        <Box>
          <TextTypography/>
          <TextTypography/>
        </Box>
      </Grid>
    </Grid>
  </Card>
};

export default RecentTransactionsCard;
