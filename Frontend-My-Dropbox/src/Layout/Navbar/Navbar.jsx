import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faSignOut } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { UserLogout } from "../../redux/extraReducer";
import { auth } from "../../api/firebase";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();
  let user = JSON.parse(localStorage.getItem("localUser"));
  const [users, setUsers] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((e) => {
      setUsers(e);
    });
  }, []);
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <h2>DROPBOX</h2>
          <div className="dropdown">
            <div
              className="btn"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              <span>{users?.displayName}</span>
              <div className="userIcon">👨🏻</div>
            </div>
            <ul className={`dropdown-menu ${dropdownVisible ? "active" : ""}`}>
              <li>{user?.displayName} 👨🏻</li>

              <Link to={`/home/user/${user?.uid}`}>
                <li>
                  Settings <FontAwesomeIcon icon={faGear} />
                </li>
              </Link>

              <li onClick={() => dispatch(UserLogout())} style={{ color: "#ff0000" }}>
                Sign out <FontAwesomeIcon icon={faSignOut} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
