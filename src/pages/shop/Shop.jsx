import React from "react";
import { ComingSoon, Navbar } from "../../components/shared";

const Shop = () => {
  return (
    <>
      <Navbar />
      <div className="shop_parent">
        <div className="shop_comingSoon">
          <ComingSoon launchitem={`shop's page.`} />
        </div>
      </div>
    </>
  );
};

export default Shop;
