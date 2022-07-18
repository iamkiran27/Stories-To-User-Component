import { Grid } from "@mui/material";
import React from "react";
import BlinklistThumbnails from "../../atoms/BlinklistThumbnails";
import Typography from "../../atoms/Typography";

interface props {
  searchedBooks?: {
    id: number;
    value: string;
    image: string;
    title: string;
    description: string;
  }[];
}
const SearchedBooks = (props : props) => {
  return (
    <div>
      {/* map the searched list of books here  */}
      <Grid>
        <Grid item>
          <Typography />
          <BlinklistThumbnails image={""} />
          <Typography />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchedBooks;
