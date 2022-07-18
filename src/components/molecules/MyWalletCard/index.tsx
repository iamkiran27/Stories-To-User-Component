import { Box, Card, Grid } from "@mui/material";
import React from "react";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface Props {
  icon?: string;
  date?: string;
  month?: string;
  from?: string;
  title?: string;
}

const MyWalletCard = (props: Props) => {
  return (
    <Card>
      <Grid>
        <Grid item>
          <Box>
            <TextTypography />
            <TextTypography />
          </Box>
          <IconImage />
          <Box>
            <TextTypography />
            <TextTypography />
          </Box>
          <Box>
            <TextTypography />
            <TextTypography />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MyWalletCard;
