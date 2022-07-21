/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

function App() {
  const [title, settitle] = useState("Dashboard");

  const handleSellButton = () => {};

  const handleBuyButton = () => {};

  return (
    <>
      <Header
        title={title}
        handleSellButton={handleSellButton}
        handleBuyButton={handleBuyButton}
      />
      {/* routing to pages goes here...... */}
      <Footer />
    </>
  );
}

export default App;
