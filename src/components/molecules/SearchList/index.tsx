import { Grid } from "@mui/material";
import React from "react";
import Typography from "../../atoms/Typography";

interface searchListOptions {
  searchOptions?: {
    id: number;
    title: string;
    authorName: string;
  }[];
  handleClick : (id : number, value : string) => void;
}

const SearchList = (props : searchListOptions) => {
  return (
    <div>
      <Grid>
        {/* map all the search list here */}

        <Grid item>
          <Typography />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchList;
