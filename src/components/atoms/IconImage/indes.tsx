import React from "react";

interface Props {
  height?: string;
  width?: string;
  icon?: any;
}
const IconImage = (props: Props) => {
  return (
    <div>
      <img
        src={props.icon}
        style={{ height: props.height, width: props.width }}
        alt="img"
      />
    </div>
  );
};

export default IconImage;
