import React from "react";

export const AdminPage = () => {
  const commitAll = () => {
    alert("commitAll");
  };

  return (
    <div>
      <div id="App">
        <h1>Admin 페이지 입니다.</h1>
        <button onClick={commitAll}>저장</button>
      </div>
    </div>
  );
};
