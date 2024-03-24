import React from "react";
import InputModal from "./InputModal";
import TableComponent from "./TableComponent";

const index = () => {
  return (
    <>
      <div className="d-flex justify-content-end">
        <InputModal up_code="1001" Button_Name="추가" />
      </div>
      <div>
        <TableComponent />
      </div>
    </>
  );
};
export default index;
