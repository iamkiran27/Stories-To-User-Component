import { Grid } from "@mui/material";
import React from "react";
import BlinklistThumbnails from "../../atoms/BlinklistThumbnails";
import IconButton from "../../atoms/IconButton";
import Typography from "../../atoms/Typography";
import SelectMailDropDown from "../../molecules/SelectMailDropDown";
import TextInputField from "../../molecules/TextInputField";


interface KindleModal {
    openModal? : boolean;
   handleModal :  React.Dispatch<React.SetStateAction<boolean>>;

}

const SendToKindleModal = (props : KindleModal) => {
  return (
    <div>
      <Grid>
        <Grid item>
          <Typography />
          {/* add all respective typos */}
          <TextInputField />
          <SelectMailDropDown mailOptions={[]} />
          <IconButton handleClick={() => {

          } } />
          <IconButton handleClick={() => {

          } } />
        </Grid>

        {/* conditonal rendering another grid item after sending to kindle */}

        <Grid item>
          <BlinklistThumbnails image={""} />
          {/* all typo's */}
          <IconButton handleClick={() => {

          }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SendToKindleModal;
