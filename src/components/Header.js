import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/addtask">Add Task</Link>
      </li>
    </ul>
  </nav>
);
