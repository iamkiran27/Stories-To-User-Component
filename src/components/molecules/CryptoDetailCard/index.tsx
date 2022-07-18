import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import IconButton from "../../atoms/IconButton";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface Props {
  icon?: string;
  title?: string;
  handleAddToWatchList: () => void;
  maketCap?: string;
  volume?: string;
  capacity?: string;
}

const CryptoDetailCard = (props: Props) => {
  return (
    <Card>
      <Grid>
        <Grid item>
          <IconImage />
          <TextTypography />
          <IconImage />
          <Box>
            <TextTypography />
          </Box>
          <Box>
            <TextTypography />
          </Box>
          <Box>
            <TextTypography />
          </Box>

          <IconButton handleClick={props.handleAddToWatchList} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default CryptoDetailCard;
