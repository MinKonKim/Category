import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

function TableComponent() {
  return (
    <div>
      <Table border hover>
        <thead id="left_table_head">
          <tr>
            <th className="width:30px">보기</th>
            <th scope="col">메뉴코드</th>
            <th scope="col">메뉴명</th>
            <th scope="col">하위폴더</th>
            <th scope="col">링크주소</th>
            <th scope="col">디폴트메뉴코드</th>
            <th scope="col">사용여부</th>
          </tr>
        </thead>
        <tbody id="left_table_data">
          <tr>
            <td>#</td>
            <td>
              <input type="text" placeholder="aa" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>#</td>
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
