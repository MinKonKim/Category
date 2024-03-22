import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

function TableComponent() {
  const [rows, setRows] = useState([]);
  const [selectedRow, setselectedRow] = useState(null);

  const handleAddRow = () => {
    //새로운 행을 추가한다.
    const newRow = { id: rows.length + 1, data: `행 ${rows.length + 1}` };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = () => {
    //선택된 행을 삭제합니다.
    setRows(rows.filter((row) => row.id !== selectedRow));
    setselectedRow(null); //선택행 초기화
  };

  return (
    <div>
      <Button variant="primary" onClick={handleAddRow}>
        추가
      </Button>
      <Button
        variant="danger"
        onClick={handleDeleteRow}
        disabled={!selectedRow}
      >
        삭제
      </Button>
      <Table border hover>
        <tbody>
          <tr>
            <td>
              <div>
                <Table>
                  <thead id="left_table_head">
                    <tr>
                      <th className="width:30px">보기</th>
                      <th scope="col">메뉴코드</th>
                      <th scope="col">메뉴명</th>
                      <th scope="col">하위폴더</th>
                    </tr>
                  </thead>
                  <tbody id="left_table_data">
                    <tr>
                      <td>#</td>
                      <td>
                        <input type="text" />
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                      <td>#</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </td>
            <td>
              <div>
                <Table responsive="mg">
                  <thead id="right_table_head">
                    <tr>
                      <th scope="col">링크주소</th>
                      <th scope="col">디폴트메뉴코드</th>
                      <th scope="col">사용여부</th>
                    </tr>
                  </thead>
                  <tbody id="right_table_data">
                    <tr>
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
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableComponent;
