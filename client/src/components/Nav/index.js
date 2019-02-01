import React from "react";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg style={{background-color:teal}}">
      <a className="navbar-brand" href="/">
        React Google Books Search
      </a>
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
