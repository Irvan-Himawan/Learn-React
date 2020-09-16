import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <header>
      <h1>
        <Link to="/">LOGO</Link>
      </h1>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            {" "}
            <Link to="/todolist">To-do-list</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
