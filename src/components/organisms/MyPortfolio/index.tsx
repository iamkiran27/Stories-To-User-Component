import { Box, Grid } from "@mui/material";
import React from "react";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";
import PrimaryCard from "../../molecules/PrimaryCard";
import RecentTransactionsCard from "../../molecules/Recentransactions";

interface Props {
  portfolioList?: {
    id: number;
    image: string;
    title: string;
    abbrevation: string;
    value: number;
    differenceMargin: number;
  }[];

  image?: string;
  recenttransactionList: {
    id: number;
    date?: string;
    icon?: string;
    title?: string;
    description?: string;
    value?: number;
    balance?: number;
  }[];
}
const MyPortfolio = (props: Props) => {
  return (
    <Grid>
      <Grid item>
        <TextTypography />
        <IconImage />
        <IconImage />
      </Grid>
      <Grid item>
        {props.portfolioList?.map((value) => {
          return <PrimaryCard />;
        })}
      </Grid>
      <Grid item>
        <Box>
          <TextTypography />
          <TextTypography />
        </Box>
      </Grid>

      <TextTypography />
      <PrimaryCard />
      <Grid item>
        <TextTypography />

        {props.recenttransactionList.length > 0 ? (
          <>
            {props.recenttransactionList.map((value) => {
              return <RecentTransactionsCard />;
            })}
          </>
        ) : (
          <>
            <IconImage icon={props.image} />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default MyPortfolio;
