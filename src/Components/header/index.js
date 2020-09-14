import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <header>
      <nav>
        <li>
          {" "}
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          {" "}
          <Link to="/todolist">To-do-list</Link>
        </li>
      </nav>
    </header>
  );
}

export default header;
