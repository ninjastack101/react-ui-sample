import React from "react";
import "./text.css";

export default function Text({ title, value }) {
  return (
    <ul className="requested-fild">
      <li className="label"> {title} </li>
      <li className="label-value"> {value} </li>
    </ul>
  );
}
