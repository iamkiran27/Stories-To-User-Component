import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextTypography from "../../atoms/TextTypography";
import AmountDetailsCard from "../../molecules/AmountDetailsCard";
import ChooseCryptoCard from "../../molecules/ChooseCryptoCard";
import PaymentMethodCard from "../../molecules/PaymentMethodCard";
import SecondaryCard from "../../molecules/SecondaryCard";
import SpeedDeliveryCard from "../../molecules/SpeedDeliveryCard";

interface props {
  cryptoList: {
    id: number;
    icon: string;
    title: string;
    value: string;
  }[];
  heading?: string;

  purchase?: boolean;
}

const BuySellCrytpo = (props: props) => {
  return (
    <Grid>
      <Box>
        <TextTypography />
      </Box>
      <Grid item>
        {props.cryptoList?.map((item) => {
          return <ChooseCryptoCard />;
        })}
        <Grid item>
          {props.purchase ? <PaymentMethodCard /> : <SecondaryCard />}
        </Grid>

        <Grid item>
          <AmountDetailsCard purchase={props.purchase} />
        </Grid>

        <Grid item>
          {props.purchase ? <SpeedDeliveryCard /> : <SecondaryCard />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BuySellCrytpo;
