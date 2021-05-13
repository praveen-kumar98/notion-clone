import React from "react";

const Loader = () => {
  return (
    <div style={{position:"fixed", top: 0, left: "0px", zIndex: 10, backgroundColor: "white", height: "100vh", width: "100%"}}>
      <div className="loader">
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64"></rect>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
