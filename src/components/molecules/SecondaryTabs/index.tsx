/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

interface tabsData {
  data?: {
    firstTab: string;
    secondTab: string;
    thirdTab: string;
  };
}

const SecondaryTabs = (props : tabsData) => {

    const [activeTabe, setactiveTabe] = useState(0)
  return <div>
    {/* map through the tabs data here */}

  </div>;
};

export default SecondaryTabs;
