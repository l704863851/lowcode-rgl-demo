import React, {createElement} from "react";
import "./index.css";

export const Page = (props) => {
  return <div style={{ width: "100%", height: "100%" }}>{props.children}</div>;
};
