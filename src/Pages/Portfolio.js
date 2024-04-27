import React from "react";

import Portfolio_Section_1 from "../Components/Portfolio_Components/Portfolio_Section_1";
import Portfolio_Section_2 from "../Components/Portfolio_Components/Portfolio_Section_2";

export default function Portfolio() {
  const handleSearch = (term, criteria) => {
    console.log("Search term:", term);
    console.log("Search criteria:", criteria);
  };
  return (
    <div className="Portfolio Page">
      <Portfolio_Section_1 />
      <Portfolio_Section_2 />
    </div>
  );
}
