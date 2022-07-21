import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CryptoDetailCard from "../../molecules/CryptoDetailCard";

import Overview from "../../organisms/Overview";
import SideBar from "../../organisms/SideBar";

const DetailsPage = () => {
  const [walletList, setwalletList] = useState([]);
  useEffect(() => {
    // make an api call to fetch respective crypto data
  }, []);
  const handleAddToWatchList = () => {};

  return (
    <Grid>
      {/* <Grid item>
        <Header handleSellButton={() => {}} handleBuyButton={() => {}} />
      </Grid> */}
      <Grid item>
        <SideBar />
      </Grid>
      <Grid item>
        <CryptoDetailCard handleAddToWatchList={handleAddToWatchList} />
      </Grid>
      <Grid item>
        <Overview walletList={[]} />
      </Grid>
      {/* <Grid item>
        <Footer />
      </Grid> */}
    </Grid>
  );
};

export default DetailsPage;
