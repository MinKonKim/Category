import React, { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import InputModal from "./InputModal";
function TableComponent() {
  const [upCode, setUpCode] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setUpCode(e.target.value);
  };
  return (
    <div>
      <Table border hover responsive="md">
        <thead id="left_table_head">
          <tr>
            <th className="width:30px">보기</th>
            <th>메뉴코드</th>
            <th>메뉴명</th>
            <th>하위폴더</th>
            <th>링크주소</th>
            <th>디폴트메뉴코드</th>
            <th>사용여부</th>
          </tr>
        </thead>
        <tbody id="left_table_data">
          <tr className="view_table_tr">
            <td>
              <InputModal
                Button_Name={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-file-earmark-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"></path>
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"></path>
                  </svg>
                }
              />
            </td>
            <td>
              <input
                type="text"
                name="help_code"
                placeholder="코드번호"
                onChange={handleChange}
              />
            </td>
            <td>
              <input type="text" placeholder="메뉴명" />
            </td>
            <td>
              <div className="d-flex gap-2 mb-3">
                <InputModal
                  up_code={upCode}
                  Button_Name={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-folder-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z"></path>
                      <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5"></path>
                    </svg>
                  }
                />
              </div>
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td className="h-30px">
              <Form.Select arial-label="Is_Usable">
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Form.Select>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableComponent;
