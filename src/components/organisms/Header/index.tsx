import { Grid } from "@mui/material";
import React from "react";
import IconImage from "../../atoms/IconImage/indes";
import IconWithLabel from "../../molecules/IconWithLabel";

const Header = () => {
  return (
    <div>
      <Grid>
        <Grid item>
          <IconWithLabel iconImage={""} />
          <IconImage />
          <IconWithLabel iconImage={""} />
          {/* my library typo             */}
          {/* highlights typo  */}
          <IconWithLabel iconImage={""} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
