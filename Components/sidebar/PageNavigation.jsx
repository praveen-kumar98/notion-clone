import React, { useState } from "react";
import Dropdown from "./Dropdown";


const PageNavigation = ({
  name,
  pageId,
  closed,
  openFolder,
  depth,
  addPage,
}) => {
  const [optionOpacity, setOptionOpacity] = useState(0);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div
      key={pageId}
      className="active page"
      style={{ paddingLeft: `${20 * depth + 15}px` }}
      onMouseEnter={() => setOptionOpacity(100)}
      onMouseLeave={() => {
        dropDownOpen === false ? setOptionOpacity(0) : null;
      }}
    >
      <i
        className={closed === true ? "fas fa-caret-right" : "fas fa-caret-down"}
        onClick={() => openFolder(pageId)}
      ></i>
      <i className="fas fa-file-alt"></i>
      {/* Page Name */}
      <div className="page-name">
        <p className="page-title">{name}</p>
      </div>
      <div className="page-options" style={{ opacity: optionOpacity }}>
        {/* Dropdown Component */}
        <Dropdown
          setDropDownOpen={setDropDownOpen}
          setOptionOpacity={setOptionOpacity}
          addPage={addPage}
          depth={depth}
          pageId={pageId}
        />
      </div>
    </div>
  );
};

export default PageNavigation;
