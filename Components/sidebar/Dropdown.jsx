import React, { useState, createRef, useEffect } from "react";

const Dropdown = ({ setOptionOpacity, setDropDownOpen }) => {
  const [dropdownVisibale, setDropdownVisible] = useState(false);
  const [renameDropdn, setRenameDropdn] = useState(false);
  const [confirmModalvisible, setConfirmModalvisible] = useState(false);

  const dpdnRef = createRef();
  const renameRef = createRef();
  const modalRef = createRef();

  const shouldBlur = (e) => {
    if (e.keyCode === 13) {
      setRenameDropdn(false);
      setOptionOpacity(0);
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    const dpdnHandler = (e) => {
      if (!dpdnRef.current) {
        return;
      }
      if (!dpdnRef.current.contains(e.target)) {
        setDropdownVisible(false);
        setDropDownOpen(false);
        setOptionOpacity(0);
      }
    };
    const renameHandler = (e) => {
      if (!renameRef.current) {
        return;
      }
      if (!renameRef.current.contains(e.target)) {
        setRenameDropdn(false);
        setDropDownOpen(false);
        setOptionOpacity(0);
      }
    };
    const modalHandle = (e) => {
      if (modalRef.current === e.target) {
        setConfirmModalvisible(false);
      }
    };
    document.addEventListener("mousedown", dpdnHandler);
    document.addEventListener("mousedown", renameHandler);
    document.addEventListener("mousedown", modalHandle);

    return () => {
      document.removeEventListener("mousedown", dpdnHandler);
      document.removeEventListener("mousedown", renameHandler);
      document.removeEventListener("mousedown", modalHandle);
    };
  }, [
    dpdnRef,
    renameRef,
    modalRef,
    setConfirmModalvisible,
    setOptionOpacity,
    setDropDownOpen,
  ]);
  return (
    <div className="dropdown">
      {/* Dropdown parent */}
      <div className="dropdown-parent">
        <i
          className="fas fa-ellipsis-h page-option"
          onClick={() => {
            setDropdownVisible(true);
            setDropDownOpen(true);
          }}
        ></i>
        <i className="fas fa-plus"></i>

      </div>

      {/* Dropdown content */}
      {dropdownVisibale === true ? (
        <div className="dropdown-content" ref={dpdnRef}>
          <a
            className="edit-dropdown"
            onClick={() => {
              setDropdownVisible(false);
              setRenameDropdn(true);
            }}
          >
            <i className="far fa-edit"></i>
            Rename
          </a>
          <a

            onClick={() => {
              setConfirmModalvisible(true);
              setDropdownVisible(false);
            }}
          >
            <i className="far fa-trash-alt"></i>
            Delete
          </a>

        </div>
      ) : null}

      {/* Rename Page Dropdown */}
      {renameDropdn === true ? (
        <div className="rename" ref={renameRef}>
          <div>
            <input
              placeholder="Untitled"
              type="text"
              className="page-name"
              onKeyDown={shouldBlur}
            />
          </div>
        </div>
      ) : null}

      {/* Delete confirmation modal */}
      {confirmModalvisible === true ? (
        <div className="semi-transparent-bg" ref={modalRef}>
          <div className="modal">
            <p>Are you sure? You want to delete this page?</p>
            <button className="delete-btn">Delete</button>
            <button
              className="cancel-btn"
              onClick={() => setConfirmModalvisible(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
