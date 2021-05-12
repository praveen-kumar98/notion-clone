import React, { useState } from "react";
import PageNavigation from "./PageNavigation";
import SearchModal from "./SearchModal";

const Sidebar = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const closeModal = () => setSearchModalOpen(false);
  return (
    <div>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="user-icon">A</div>
        <div className="user-name">
          <p>Praveen's Notion</p>
        </div>
        <div className="arrows">
          <div className="arrow-left"></div>
          <div className="arrow-left"></div>
        </div>
      </div>
      {/* Search */}
      <div className="search" onClick={() => setSearchModalOpen(true)}>
        <i className="fas fa-search"></i>
        <p>Quick Search</p>
      </div>
      {/* Search Modal */}
      {searchModalOpen === true && (
        <SearchModal closeModal={() => setSearchModalOpen(false)} />
      )}
      {/* Pages */}
      <div className="pages">
        <div>
          {/* Page Navigation component */}
          <PageNavigation />
        </div>
      </div>
      {/* Add page */}
      <div className="add-page">
        <i className="fas fa-plus"></i>
        <p>Add a Page</p>
      </div>
      {/* Logout */}
      <div className="logout">
        <i className="fas fa-sign-out-alt"></i>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
