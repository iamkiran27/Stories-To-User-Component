import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Graph from "../../atoms/Graph";
import IconButton from "../../atoms/IconButton";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";
import TimePeriodTabs from "../../molecules/TimePeriodTabs";

interface Props {
  totalInvestment: number;
  cryptoPrice?: number;
  crypto?: string;
  graphData?: number[];
  cryptoData?: number[];
  coinsList: string[];
  iconImage?: string;
}

const PortfolioValue = (props: Props) => {
  return (
    <Grid>
      <Grid item>
        <TextTypography />

        {props.totalInvestment > 0 ? (
          <>
            <Box>
              <TextTypography />

              <TextTypography />
            </Box>
          </>
        ) : null}

        <TimePeriodTabs />

        {props.totalInvestment > 0 ? <Graph /> : <IconImage />}
      </Grid>

      {props.totalInvestment > 0 ? (
        <>
          <Box>
            <IconImage />
            {props.coinsList?.map((value) => {
              return <IconButton handleClick={() => {}} />;
            })}
          </Box>
        </>
      ) : null}
    </Grid>
  );
};

export default PortfolioValue;
