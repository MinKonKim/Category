import React from "react";
import axios from "axios";
// axios를 쓰는 목적에 서버에 데이터를 요청할때,
// 비동기적으로 요청 하려고

export const AdminPage = () => {
  const commitAll = async () => {
    alert("commitAll");
    //    값을 다 받아올때 까지 기다린다 : await
    const result = await axios.get("/admin");
    console.log(result);
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
