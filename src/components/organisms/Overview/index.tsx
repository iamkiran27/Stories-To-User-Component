/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { StringLiteral } from "typescript";
import Graph from "../../atoms/Graph";
import TextTypography from "../../atoms/TextTypography";
import Dropdown from "../../molecules/Dropdown";
import LabelWithIcon from "../../molecules/LabelWithIcon";
import MyWalletCard from "../../molecules/MyWalletCard";
import PrimaryCard from "../../molecules/PrimaryCard";
import SearchAssets from "../../molecules/SearchAssests";
import TimePeriodTabs from "../../molecules/TimePeriodTabs";

interface Props {
  currentValue?: string;
  change?: string;
  graphData?: any;
  graphColor?: string;
  priceCorellationList?: {}[];
  walletList: {
    id: number;
    icon: string;
    title: string;
    abbrevation: string;
    price: number;
    change: string;
    marketCap: string;
    watch: boolean;
  }[];
}
const Overview = (props: Props) => {
  const [tadIndex, settadIndex] = React.useState(0);
  return (
    <Grid>
      <Grid item>
        {/* create two tabs here one is overview and other is wallets tab */}
      </Grid>
      <Grid item>
        {tadIndex == 0 ? (
          <>
            <Box>
              <TextTypography />
              <TextTypography />
            </Box>

            <Box>
              <TimePeriodTabs />
            </Box>

            <Grid item>
              <Graph />
            </Grid>

            <Grid item>
              <Box>
                <TextTypography />

                <TextTypography />
                <LabelWithIcon handleClick={() => {}} />
                <LabelWithIcon handleClick={() => {}} />
              </Box>
              <Box>
                <TextTypography />
                {props.priceCorellationList?.map((value) => {
                  return <PrimaryCard />;
                })}
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item>
              <Box>
                <TextTypography />
                <TextTypography />
              </Box>
            </Grid>
            <Grid item>
              <SearchAssets />
              <Dropdown />
            </Grid>

            <Grid item>
              {props.walletList.map((value) => {
                return <MyWalletCard />;
              })}
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Overview;
