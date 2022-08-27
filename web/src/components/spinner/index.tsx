import React from "react";
import { Spin } from "antd";
import "./styles.css";

function Spinner() {
  return (
    <div className="spinner">
      <Spin />
    </div>
  );
}

export default Spinner;
