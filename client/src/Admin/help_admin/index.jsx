import React from "react";
import InputModal from "./InputModal";
import TableComponent from "./TableComponent";

const index = () => {
  return (
    <>
      <div className="d-flex justify-content-end">
        <InputModal Button_Name="추가" />
      </div>
      <div>
        <TableComponent />
      </div>
    </>
  );
};
export default index;
