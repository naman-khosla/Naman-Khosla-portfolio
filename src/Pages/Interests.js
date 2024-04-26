import React, { useState, useEffect } from "react";
import Interests_Section_1 from "../Components/Interests_Components/Interests_Section_1.js";
import Interests_Section_2 from "../Components/Interests_Components/Interests_Section_2.js";
export default function Interests() {
  return (
    <div className="Interests_page">
      <Interests_Section_1 />
      <Interests_Section_2 />
    </div>
  );
}
