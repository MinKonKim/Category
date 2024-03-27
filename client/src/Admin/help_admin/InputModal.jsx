import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import TextEditor from "./../../common/TextEditor";
import { submitHelpForm } from "./../../model/HelpFormModel";
import { useNavigate } from "react-router-dom";
function InputModal({ up_code, Button_Name }) {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    help_code: "",
    help_up_code: "",
    help_content: "",
    help_subject: "",
    link_address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    submitHelpForm(formData);
    navigate("/");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>{Button_Name}</Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>도움말 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Form.Group
                  className="mb-3 row"
                  controlId="helpForm.HelpCodeInput"
                >
                  <Col xs={12} md={8}>
                    <Form.Label
                      id="help_code"
                      name="help_code"
                      className="col-sm-4 col-form-label p-3"
                    >
                      메뉴코드 (필수)
                    </Form.Label>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Control
                      as="input"
                      name="help_code"
                      value={formData.help_code}
                      onChange={handleChange}
                      autoFocus
                    />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3 row">
                  <Col xs={12} md={8}>
                    <Form.Label className="col-sm-4 col-form-label  p-3">
                      상위메뉴경로
                    </Form.Label>
                  </Col>
                  <Col xs={6} md={4}>
                    {
                      (up_code =
                        up_code === "" ? (
                          <Form.Control
                            type="text"
                            name="help_up_code"
                            value={formData.help_up_code}
                            onChange={handleChange}
                          />
                        ) : (
                          up_code
                        ))
                    }
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3 row" controlId="helpForm.MenuName">
                  <Col xs={12} md={8}>
                    <Form.Label className="col-form-label  p-3">
                      메뉴명
                    </Form.Label>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Control
                      as="input"
                      name="help_subject"
                      className="col-sm-10"
                      value={formData.help_subject}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3 row" controlId="helpForm.MenuIcon">
                  <Col xs={12} md={8}>
                    <Form.Label className="p-3">메뉴아이콘</Form.Label>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Control as="input" />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  className="mb-3 row"
                  controlId="helpForm.LinkAddress"
                >
                  <Col xs={12} md={8}>
                    <Form.Label className="col-form-label  p-3">
                      링크주소
                    </Form.Label>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Control
                      type="text"
                      className="col-sm-10"
                      name="link_address"
                      value={formData.link_address}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  className="mb-3 row"
                  controlId="helpForm.DefaultMenuCode"
                >
                  <Col xs={12} md={8}>
                    <Form.Label className="col-form-label  p-3">
                      디폴트메뉴코드
                    </Form.Label>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Control as="input" />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  className="mb-3 row"
                  controlId="helpForm.HelpCodeInput"
                >
                  <Col xs={12} md={8}>
                    <Form.Label className="col-form-label  p-3">
                      사용여부
                    </Form.Label>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Select aria-label="Is_Usable">
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
              <div>
                <TextEditor
                  name="help_content"
                  value={formData.help_content}
                  onChange={(e) => handleChange}
                />
              </div>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InputModal;
