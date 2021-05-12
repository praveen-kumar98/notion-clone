import React, { useEffect, useRef, useState } from "react";

const SearchModal = ({ closeModal }) => {
  const node = useRef();
  const [pages, setPages] = useState([{ pageName: "Page 1" }]);
  const [searchValue, setSearchValue] = useState("");
  // Adding event listener to detect clicks outside the modal
  useEffect(() => {
    const handleClick = (e) => {
      if (node.current === e.target) {
        closeModal();
        setSearchValue("");
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [node]);
  return (
    <div className="semi-transparent-bg" ref={node}>
      <div className="modal search-modal">
        {/* Search Input */}
        <div className="search-input">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search......."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        {/* Results */}
        {searchValue !== "" && (
          <div className="search-result">
            {pages.map((page) => {
              if (
                page.pageName.toUpperCase().includes(searchValue.toUpperCase())
              ) {
                return (
                  <div className="result" onClick={closeModal}>
                    <i className="fa fa-file-alt" />
                    {page.pageName}
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
