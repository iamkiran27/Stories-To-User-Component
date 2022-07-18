import { Grid } from "@mui/material";
import React from "react";
import CryptoDetailCard from "../../molecules/CryptoDetailCard";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import Overview from "../../organisms/Overview";
import SideBar from "../../organisms/SideBar";

const DetailsPage = () => {
  return (
    <Grid>
      <Grid item>
        <Header handleSellButton={() => {}} handleBuyButton={() => {}} />
      </Grid>
      <Grid item>
        <SideBar />
      </Grid>
      <Grid item>
        <CryptoDetailCard handleAddToWatchList={() => {}} />
      </Grid>
      <Grid item>
        <Overview walletList={[]} />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default DetailsPage;
