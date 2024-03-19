import React from "react";
import axios from "axios";
export const QaPage = () => {
  const selectWhere = () => {
    alert("selectWhere!");
    axios.get("/qapage/" + 3);
  };

  return (
    <div>
      <h1>QA 화면입니다.</h1>
    </div>
  );
};
