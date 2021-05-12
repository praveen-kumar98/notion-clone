import React, { useState } from "react";
import Dropdown from "./Dropdown";

const PageNavigation = () => {
  const [optionOpacity, setOptionOpacity] = useState(0);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div
      className="page"
      onMouseEnter={() => setOptionOpacity(100)}
      onMouseLeave={() => {
        dropDownOpen === false ? setOptionOpacity(0) : null;
      }}
    >
      <i className="fas fa-caret-right"></i>
      <i className="fas fa-file-alt"></i>
      {/* Page Name */}
      <div className="page-name">
        <p className="page-title">Page Name</p>
      </div>
      <div className="page-options" style={{ opacity: optionOpacity }}>
        {/* Dropdown Component */}
        <Dropdown
          setDropDownOpen={setDropDownOpen}
          setOptionOpacity={setOptionOpacity}
        />
      </div>
    </div>
  );
};

export default PageNavigation;
