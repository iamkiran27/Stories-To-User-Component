/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BlinklistThumbnails from "../../atoms/BlinklistThumbnails";
import IconButton from "../../atoms/IconButton";
import IconWithLabel from "../../molecules/IconWithLabel";
import SecondaryTabs from "../../molecules/SecondaryTabs";

interface BookDetailsProps {
    id? : number;
}

const BookDetails = (props : BookDetailsProps) => {
  const [bookData, setbookData] = useState({});
  useEffect(() => {
    // get the details of respective book by hitting book/{id} api
  }, []);

  const handleReadNow = () => {

  }


  return (
    <div>
      <Grid>
        <Grid item>
          {/* Book title typo */}
          {/* Book brief cescription  */}
          {/* Author name typo */}

          <IconWithLabel iconImage={""} />
          <IconWithLabel iconImage={""} />

          {/* another grid to show 3 different buttons */}
          <IconButton handleClick={handleReadNow} />
          <SecondaryTabs />
        </Grid>
        <Grid item>
          <BlinklistThumbnails image={""} />
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetails;
