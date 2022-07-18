import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";
import GraphCard from "../../molecules/GraphCard";

import LabelWithIcon from "../../molecules/LabelWithIcon";

interface Props {
  watchListData: {
    id: number;
    image: string;
    title: string;
    value: string;
    time: string;
    grpahData: any;

    graphColor: string;
  }[];
}

const WatchList = (props: Props) => {
  return (
    <Grid>
      <Grid item>
        <TextTypography />
        <LabelWithIcon handleClick={() => {}} />
        <Box>
          <LabelWithIcon handleClick={() => {}} />
          <IconImage />
          <IconImage />
        </Box>
      </Grid>
      <Grid item>
        {props.watchListData.map((value) => {
          return <GraphCard />;
        })}
      </Grid>
    </Grid>
  );
};

export default WatchList;
