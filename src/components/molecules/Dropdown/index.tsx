import React from "react";

interface Props {
  options?: {
    id: number;
    value: string;
  }[];
}

const Dropdown = (props: Props) => {
  return (
    <div>{/* create custom Dropdown and use options form the props */}</div>
  );
};

export default Dropdown;
