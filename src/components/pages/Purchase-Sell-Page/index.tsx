import { Grid } from "@mui/material";
import React from "react";
import BuySellCrytpo from "../../organisms/Buy-SellCrypto";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import PurchaseDetails from "../../organisms/PurchaseDetails";
import SideBar from "../../organisms/SideBar";

const PurchasePage = () => {
  return (
    <Grid>
      <Grid item>
        <Header handleSellButton={() => {}} handleBuyButton={() => {}} />
      </Grid>
      <Grid item>
        <SideBar />
      </Grid>
      <Grid item>
        <BuySellCrytpo />
      </Grid>
      <Grid item>
        <PurchaseDetails />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default PurchasePage;
