import React from "react";
import IconImage from "../../atoms/IconImage";
import TextTypography from "../../atoms/TextTypography";

interface props {
  label?: string;
  icon?: string;
  handleClick: () => void;
}

const LabelWithIcon = (props: props) => {
  return (
    <div onClick={props.handleClick}>
      <TextTypography />
      <IconImage />
    </div>
  );
};

export default LabelWithIcon;
