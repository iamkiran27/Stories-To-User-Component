import { Grid, IconButton } from "@mui/material";
import React from "react";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface props {
  purchase?: boolean;
}

const PaymentSuccess = (props: props) => {
  return (
    <Grid>
      <Grid item>
        <IconImage />
        <TextTypography />
        {props.purchase ? (
          <TextTypography
            text={
              "Purchase is completed, please check yourbalance in your crypto wallet"
            }
          />
        ) : (
          <TextTypography
            text={
              "Sell is completed, please check yourbalance in your Rupee coin"
            }
          />
        )}
      </Grid>
      <Grid item>
        {props.purchase ? (
          <IconButton>{"Purchase"}</IconButton>
        ) : (
          <IconButton>{"Sell"}</IconButton>
        )}
      </Grid>
    </Grid>
  );
};

export default PaymentSuccess;
