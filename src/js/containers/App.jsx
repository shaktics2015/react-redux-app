/* eslint-disable no-undef */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Landing from "../components/Landing.jsx";
// import { resetErrorMessage } from "../actions";
import Header from "./../commons/Header.jsx";
import Footer from "./../commons/Footer.jsx";

class App extends Component {
  static propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    // resetErrorMessage: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    // Injected by React Router
    children: PropTypes.node,
  };

  handleDismissClick = (e) => {
    // this.props.resetErrorMessage();
    e.preventDefault();
  };

  handleChange = (nextValue) => {
    this.props.history.push(`/${nextValue}`);
  };

  renderErrorMessage() {
    const { errorMessage } = this.props;
    if (!errorMessage) {
      return null;
    }

    return (
      <p style={{ backgroundColor: "#e99", padding: 10 }}>
        <b>{errorMessage}</b>{" "}
        <button onClick={this.handleDismissClick}>Dismiss</button>
      </p>
    );
  }

  render() {
    const { children, inputValue } = this.props;
    return (
      <div>
        <Header />
        <Landing value={inputValue} onChange={this.handleChange} />
        <hr />
        {this.renderErrorMessage()}
        {children}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage,
  inputValue: ownProps.location.pathname.substring(1),
});

// HOC to inject router props into class component
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    return (
      <Component
        {...props}
        location={location}
        history={{ push: navigate }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter(
  connect(mapStateToProps, {
    // resetErrorMessage,
  })(App)
);
