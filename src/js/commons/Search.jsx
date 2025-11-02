/* eslint-disable no-undef */

import React, { Component } from "react";
import { InputGroup, Form, Col, Button } from "react-bootstrap";

import "../../css/Search.css";

export default class Search extends Component {
  errors = {
    query: "",
  };

  componentDidMount(prevProps) {
    // console.log("componentDidMount this.props", this.props);
  }

  setInputValue = (val) => {
    this.input.value = val;
  };

  getInputValue = () => {
    return this.input.value;
  };
  handleKeyUp = (e) => {
    // if (e.keyCode === 13) {
    this.handleSearchClick();
    // }
  };

  handleSearchClick = () => {
    console.log(this.getInputValue());
    //   this.props.config(this.getInputValue());
  };

  render() {
    return (
      <div className="search-container">
        {this.props.config.showHeader ? (
          <div className="search-form-header">
            <h1 className="heading transparent-bg">Cooking gone wrong?</h1>
            <h3 className="sub-heading transparent-bg">
              Order food from favourite restaurant.
            </h3>
          </div>
        ) : null}
        <Form className="search-form">
          <Form.Group
            as={Col}
            lg="6"
            md="8"
            sm="12"
            controlId="validationFormQuery"
          >
            <InputGroup>
              <Form.Control
                type="text"
                className="search-field"
                placeholder="Search for..."
                aria-describedby="inputGroupPrepend"
                name="query"
                ref={(input) => (this.input = input)}
                defaultValue={this.props.value}
                onKeyUp={this.handleKeyUp}
                isInvalid={!!this.errors.query}
              />
              <InputGroup.Append>
                <Button
                  className="transparent-bg clear-search"
                  color="grey"
                  id="inputGroupPrepend"
                >
                  x
                </Button>
              </InputGroup.Append>
              <InputGroup.Append>
                <Button onClick={this.handleGoClick} id="inputGroupPrepend">
                  FIND RESULTS
                </Button>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                {this.errors.query}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form>

        {this.props.config.showTopNotch ? (
          <div className="search-form-top-notch">
            <div className="ransparent-bg">POPULAR CITIES IN INDIA </div>
            <span className="transparent-bg">ahmedabad</span>
          </div>
        ) : null}
      </div>
    );
  }
}
