import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import BuySellCrytpo from "../../organisms/Buy-SellCrypto";

import PurchaseDetails from "../../organisms/PurchaseDetails";
import SideBar from "../../organisms/SideBar";

const PurchasePage = () => {
  const [cryptoList, setcryptoList] = useState([]);

  useEffect(() => {
    // make api call to fetch crypto list ans store that in the state variable
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
        <BuySellCrytpo cryptoList={cryptoList} />
      </Grid>
      <Grid item>
        <PurchaseDetails />
      </Grid>
      {/* <Grid item>
        <Footer />
      </Grid> */}
    </Grid>
  );
};

export default PurchasePage;
