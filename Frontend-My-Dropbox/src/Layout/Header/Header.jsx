import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
function Header({
  setVisibleUploadModal,
  setVisibleCreateFolderModal,
  navigationsState,
}) {
  return (
    <div className="headerPages">
      <div className="header-side container">
        <h1 class="allFiles">
          <FontAwesomeIcon icon={faFolder} className="folderIcons" />
          All Files
          </h1>
        <div className="buttons">
          <button
            className="create"
            onClick={() => setVisibleCreateFolderModal(true)}
          >
            Create
          </button>
          <button
            className="upload"
            onClick={() => setVisibleUploadModal(true)}
          >
            Upload
          </button>
        </div>
      </div>
      {/* <hr style={{ marginTop: "10px" }} />
      {navigationsState ? <></> : <></>}
      <hr /> */}
    </div>
  );
}

export default Header;
