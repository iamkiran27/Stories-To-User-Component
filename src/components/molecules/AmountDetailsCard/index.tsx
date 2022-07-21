import { Box, Card, Grid } from "@mui/material";
import React from "react";
import IconButton from "../../atoms/IconButton";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface AmountDetailsCardProps {
  value?: number;
  crypto?: number;
  purchase?: boolean;
}

const AmountDetailsCard = (props: AmountDetailsCardProps) => {
  return (
    <Card>
      <Grid>
        <Grid item>
          <TextTypography />
          <Box>
            <Box>
              {props.purchase ? (
                <TextTypography text={props.value?.toString()} />
              ) : (
                <TextTypography text={props.crypto?.toString()} />
              )}
              <IconButton
                children={props.purchase ? "Buy Max" : "Sell Max"}
                handleClick={() => {}}
              />
            </Box>
            <IconImage />
            <TextTypography />
            <Box>
              {props.purchase ? (
                <TextTypography text={props.crypto?.toString()} />
              ) : (
                <TextTypography text={props.value?.toString()} />
              )}
            </Box>
            <TextTypography />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AmountDetailsCard;
