import React, { useState, useEffect, useCallback } from "react";
import PageNavigation from "./PageNavigation";
import SearchModal from "./SearchModal";

const Sidebar = ({ pages }) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [pageList, setPageList] = useState([]);

  const recursion = useCallback((arr, d) => {
    arr.forEach((i) => {
      let pageObject = {
        _id: i._id,
        name: i.name,
        depth: d,
        parent: i.parent,
        closed: true,
        children: i.children,
      };

      setPageList((pageList) => [...pageList, pageObject]);
      if (i["children"]?.length > 0) {
        recursion(i["children"], d + 1);
      }
    });
  }, []);

  function getPages(pages) {
    pages.map((page) => {
      if (page.parent === null) {
        let pageObject = {
          _id: page._id,
          name: page.name,
          parent: page.parent,
          children: page.children,
          closed: true,
          depth: 0,
        };

        setPageList((pageList) => [...pageList, pageObject]);
        if (page.children.length > 0) {
          recursion(page.children, 1);
        }
      }
    });
  }

  const openFolder = (id) => {
    let index = pageList.findIndex((x) => x._id === id);

    let _pageList = [...pageList];
    if (_pageList[index]["closed"] === true) {
      _pageList[index]["closed"] = false;
    } else {
      _pageList[index]["closed"] = true;
      recursionClose(_pageList[index]["children"]);
    }

    setPageList(_pageList);
  };

  const recursionClose = (pages) => {
    pages.map((page) => {
      let index = pageList.findIndex((x) => x._id === page["_id"]);

      let _pageList = [...pageList];
      _pageList[index]["closed"] = true;

      setPageList(_pageList);
      if (page["children"].length > 0) {
        recursionClose(page["children"]);
      }
    });
  };

  useEffect(() => {
    getPages(pages);
  }, [pages]);
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
        {pageList.map((page) => {
          const parentIndex = pageList.findIndex((x) => x._id === page.parent);

          // parent folder is opne
          let parentClosed = false;
          if (parentIndex !== -1) {
            parentClosed = pageList[parentIndex]["closed"];
          }

          if (parentClosed === false) {
            return (
              <div key={page._id}>
                <PageNavigation
                  pageId={page._id}
                  name={page.name}
                  parent={page.parent}
                  closed={page.closed}
                  openFolder={openFolder}
                  depth={page.depth}
                />
              </div>
            );
          }
        })}
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
