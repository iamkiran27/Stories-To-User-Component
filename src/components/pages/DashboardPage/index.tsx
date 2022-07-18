/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";

import MyPortfolio from "../../organisms/MyPortfolio";
import PortfolioValue from "../../organisms/PortFolioValue";
import SideBar from "../../organisms/SideBar";
import WatchList from "../../organisms/WatchList";

const DashboardPage = () => {
  const [watchListData, setwatchListData] = useState([]);
  const [coinslist, setcoinslist] = useState([]);
  const [recentTransactionList, setrecentTransactionList] = useState([]);
  useEffect(() => {
    //  make api call to fetch all the datand store them in the state variables
  }, []);

  return (
    <Grid>
      {/* <Grid item>
        <Header handleSellButton={() => {}} handleBuyButton={() => {}} />
      </Grid> */}
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
