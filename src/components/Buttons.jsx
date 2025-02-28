import React from "react";
import { NavLink } from "react-router";

const Buttons = () => {
  return (
    <div className="container">
      <NavLink to="/" end>
        <button className="btn-primary">Home</button>
      </NavLink>
      {/* <NavLink to="/card" end>
        <button className="btn-send">Card</button>
      </NavLink> */}
      {/* <NavLink to="/" end>
        <button className="btn-delete">Delete</button>
      </NavLink>
      <NavLink to="/" end>
        <button className="btn-success">Success</button>
      </NavLink>
      <NavLink to="/" end>
        <button className="btn-archive">Archive</button>
      </NavLink> */}
    </div>
  );
};

export default Buttons;
