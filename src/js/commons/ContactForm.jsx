import { Container, Row, Form, Col, Button } from "react-bootstrap";
import React from "react";
import "../../css/ContactForm.css";

export default class ContactForm extends React.Component {
  render() {
    //TODO: add your form fields below that you want to submit to the sheet. This just has a name field
    return (
      <div className="contact-form-container">
        <div className="contact-form-title">Love to Hear From You </div>
        <Row>
          <Col xs={12} sm={12} md={6} lg={{ span: 4, offset: 2 }}>
            <div className="wow animated fadeInLeft" data-wow-delay=".2s">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content.
              </p>

              <div className="find-widget">
                Address: Survey No. 13, DivyaSree Omega, Kondapur Village,
                Hyderabad, Telangana 500084
              </div>
              <div className="find-widget">
                Phone: <a href="#">+91 9740375597</a>
              </div>

              <div className="find-widget">
                Email:
                <a href="mailto:sk.shrinet@gmail.com">shrinet@gmail.com</a>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={{ span: 4 }}>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNumber">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    size="sm"
                    type="number"
                    placeholder="99XXXXXXXX"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    size="sm"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPurpose">
                  <Form.Label>Purpose</Form.Label>
                  <Form.Control size="sm" as="select" custom>
                    <option>Purpose 1</option>
                    <option>Purpose 2</option>
                    <option>Purpose 3</option>
                    <option>Purpose 4</option>
                    <option>Purpose 5</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control size="sm" />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control size="sm" placeholder="1234 Main St" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  size="sm"
                  as="textarea"
                  placeholder="Write here..."
                  rows="3"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
