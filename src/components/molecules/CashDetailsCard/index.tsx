import { Card, Grid } from "@mui/material";
import React from "react";
import IconButton from "../../atoms/IconButton";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface Props {
  handleCashDeposit: () => void;
  handleWithdrawal: () => void;
}

const CashDetailsCard = (props: Props) => {
  return (
    <Card>
      <Grid>
        <Grid item>
          <IconImage />
          <TextTypography />
          <TextTypography />
          <IconButton handleClick={props.handleCashDeposit} />
          <IconButton handleClick={props.handleWithdrawal} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default CashDetailsCard;
