import { Grid } from "@mui/material";
import React from "react";
import Dropdown from "../../molecules/Dropdown";
import SearchAssets from "../../molecules/SearchAssests";
import TradeCard from "../../molecules/TradeCard";

interface Props {
  tradeList: {
    id: number;
    icon: string;
    title: string;
    abbrevation: string;
    price: number;
    change: string;
    marketCap: string;
    watch: boolean;
  }[];
}
const Trade = (props: Props) => {
  return (
    <Grid>
      <Grid item>
        <SearchAssets />
        <Dropdown />
        <Dropdown />
      </Grid>
      <Grid item>
        {props.tradeList?.map((item) => {
          return <TradeCard />;
        })}
      </Grid>
    </Grid>
  );
};

export default Trade;
