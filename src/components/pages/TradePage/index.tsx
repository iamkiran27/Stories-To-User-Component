import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Dropdown from "../../molecules/Dropdown";
import SearchAssets from "../../molecules/SearchAssests";

import SideBar from "../../organisms/SideBar";
import Trade from "../../organisms/Trade";

const TradePage = () => {
  const [tradeList, settradeList] = useState([]);

  useEffect(() => {
    // make api call to get trade list .
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
        <Grid item direction="column">
          <SearchAssets />
          <Dropdown />
          <Dropdown />
        </Grid>
        <Grid item>
          <Trade tradeList={tradeList} />
        </Grid>
      </Grid>
      {/* <Grid item>
        <Footer />
      </Grid> */}
    </Grid>
  );
};

export default TradePage;
