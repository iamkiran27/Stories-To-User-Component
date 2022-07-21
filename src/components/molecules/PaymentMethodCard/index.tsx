import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface props {
  balance?: number;
}

const PaymentMethodCard = (props: props) => {
  return (
    <Card>
      <Grid>
        <Grid item>
          <Box>
            <TextTypography />
          </Box>
          <IconImage />
          <Box>
            <TextTypography />
            <TextTypography />
          </Box>

          <Box>
            <TextTypography />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PaymentMethodCard;
