import { Grid } from "@mui/material";
import React from "react";
import Header from "../../organisms/Header";
import MyPortfolio from "../../organisms/MyPortfolio";
import PortfolioValue from "../../organisms/PortFolioValue";
import SideBar from "../../organisms/SideBar";
import WatchList from "../../organisms/WatchList";

const DashboardPage = () => {
  return (
    <Grid>
      <Grid item>
        <Header handleSellButton={() => {}} handleBuyButton={() => {}} />
      </Grid>
      <Grid item>
        <SideBar />
      </Grid>
      <Grid item>
        <WatchList watchListData={[]} />
        <PortfolioValue coinsList={[]} totalInvestment={100} />
      </Grid>
      <Grid item>
        <MyPortfolio recenttransactionList={[]} />
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
