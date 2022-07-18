import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface Props {
  paymentMethod?: string;
  deliveryFees?: number;
  paymentImage?: string;
  deliveryIcom?: string;
  depositToIcon?: string;

  depositTo?: string;
}

const TransactionProcess = (props: Props) => {
  return (
    <Box>
      <Grid>
        <Grid item>
          <Box>
            <IconImage />

            <TextTypography />
            <TextTypography />
          </Box>
          <Box>
            <IconImage />

            <TextTypography />
            <TextTypography />
          </Box>
          <Box>
            <IconImage />

            <TextTypography />
            <TextTypography />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionProcess;
