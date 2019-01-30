import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

class Success extends Component {
  render() {
    const { firstName } = this.props.values;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You {firstName} For Your Submission!</h1>
          <p>You will get an email with further instructions.</p>
          <br />
          <RaisedButton
            label="Reset Form"
            primary={true}
            onClick={this.props.resetForm}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
