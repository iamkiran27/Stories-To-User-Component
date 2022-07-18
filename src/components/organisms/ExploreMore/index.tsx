import { Grid } from "@mui/material";
import React from "react";

interface exploreDataProps {
  data: {
    id: number;
    value: string;
    icon: string;
  }[];
  handleClick: (value: string) => void;
}
const ExploreMore = (props: exploreDataProps) => {
  return (
    <div>
      <Grid>
        <Grid item>{/* explore typo headings goes here  */}</Grid>
        <Grid item>
          {/* map list of all the icon label molecules here */}
          {/* <IconWithLabel/> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default ExploreMore;
