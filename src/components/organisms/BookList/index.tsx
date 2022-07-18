import React from "react";
import { Grid } from "@mui/material";

interface BookListData {
  data: {
    id: number;
    image: string;
    title?: string;
    authorName?: string;
    readTypo?: string;
  }[];
}

const BookList = (props : BookListData) => {
  return (
    <div>
      <Grid>
        <Grid item>
          {/* {Heading} */}
          {/* map Book card molecule here */}
        </Grid>
      </Grid>
    </div>
  );
};

export default BookList;
