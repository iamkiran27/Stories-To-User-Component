import { Grid } from "@mui/material";
import React from "react";
import IconButton from "../../atoms/IconButton";
import TextTypography from "../../atoms/TextTypography";
import TransactionProcess from "../../molecules/TransactionProcess";

interface Props {
  purchase?: boolean;
  cryptoValue?: number;
}

const PurchaseDetails = (props: Props) => {
  return (
    <Grid>
      <Grid item>
        <TextTypography />
      </Grid>
      <Grid item>
        <TransactionProcess />
      </Grid>
      <Grid item>
        <TextTypography />
        <TextTypography />
        <TextTypography />
        {props.purchase ? (
          <IconButton handleClick={() => {}}>{"BUY NOW"}</IconButton>
        ) : (
          <IconButton handleClick={() => {}}>{"SELL NOW"}</IconButton>
        )}
      </Grid>
    </Grid>
  );
};

export default PurchaseDetails;
