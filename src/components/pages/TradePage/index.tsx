import { Grid } from "@mui/material";
import React from "react";
import Dropdown from "../../molecules/Dropdown";
import SearchAssets from "../../molecules/SearchAssests";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import SideBar from "../../organisms/SideBar";
import Trade from "../../organisms/Trade";

const TradePage = () => {
  return (
    <Grid>
      <Grid item>
        <Header handleSellButton={() => {}} handleBuyButton={() => {}} />
      </Grid>
      <Grid item>
        <SideBar />
      </Grid>
      <Grid item>
        <Grid item direction="column">
          <SearchAssets />
          <Dropdown />
          <Dropdown />
        </Grid>
        <Grid item>
          <Trade tradeList={[]} />
        </Grid>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default TradePage;
