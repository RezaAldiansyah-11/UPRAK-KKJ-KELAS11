import "./Navbar.css";
import { useRef, useState, useContext } from "react";
import { SearchContext } from "./SearchContext";
import logo from "../assets/logo.svg";

function Navbar() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const triggerRef = useRef(null);
  function focusInput() {
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }

  const [aboutMe, setAboutMe] = useState(false);

  return (
    <div className="navbarContainer">
      <a href="/">Smiley</a>
      <div className="searchBar">
        <img
          src={logo}
          width="35px"
          onClick={focusInput}
          style={{ cursor: "pointer" }}
        />
        <input
          type="text"
          placeholder="Search Username"
          ref={triggerRef}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          setAboutMe(true);
        }}
      >
        About Developer
      </button>
      {aboutMe && (
        <div className="aboutMeContainer">
          <div className="aboutMeBox">
            <h2>About Me :</h2>
            <div className="aboutMeContent">
              <p>
                <b>Nama:</b> Reza Aldiansyah
              </p>
              <p>
                <b>Kelas:</b> XI PPLG 3
              </p>
              <p>
                <b>Absen:</b> 33
              </p>
              <p>
                <b>Preferensi Sosmed:</b> Reddit
              </p>
              <div className="center">
                <button
                  onClick={() => {
                    setAboutMe(false);
                  }}
                >
                  CLose
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
