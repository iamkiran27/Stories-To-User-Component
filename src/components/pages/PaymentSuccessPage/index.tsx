import { Grid } from "@mui/material";
import React from "react";

import PaymentSuccess from "../../organisms/PaymentSuccess";
import SideBar from "../../organisms/SideBar";

const PaymentSuccessPage = () => {
  return (
    <Grid>
      {/* <Grid item>
        <Header handleSellButton={() => {}} handleBuyButton={() => {} } />
      </Grid> */}
      <Grid item>
        <SideBar />
      </Grid>
      <Grid item>
        <PaymentSuccess />
      </Grid>
      {/* <Grid item>
        <Footer />
      </Grid> */}
    </Grid>
  );
};

export default PaymentSuccessPage;
