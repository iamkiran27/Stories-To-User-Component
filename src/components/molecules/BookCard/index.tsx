import React from "react";
import { Card, Grid, Typography } from "@mui/material";

import BlinklistThumbnails from "../../atoms/BlinklistThumbnails";
import IconImage from "../../atoms/IconImage/indes";
import IconWithLabel from "../IconWithLabel";

interface BookCardData {
    id : number;
  image: string;
  title?: string;
  authorName?: string;
  readTypo?: string;

}

const BookCard = (props: BookCardData) => {
  return (
    <div>
      <Card>
        <Grid>
          <Grid item>
            <BlinklistThumbnails image={props.image} />
            <Typography />
            <Typography />
            <IconWithLabel iconImage={""} />
            <IconImage />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default BookCard;
