import React, { Component } from "react";

export default class Person extends Component {
  state = {
    id: 0,
    firstName: "",
    secondName: "",
    mode: "read"
  };

  changeMode = () => {
    this.setState(prevState => ({
      mode: prevState.mode === "read" ? "edit" : "read"
    }));
  };

  saveChanges = () => {
    this.props.changePerson(
      this.state.id,
      this.state.firstName,
      this.state.secondName
    );
    this.changeMode();
  };

  deletePerson = () => {
    this.props.deletePerson(this.props.id);
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.setState({
      id: this.props.id,
      firstName: this.props.firstName,
      secondName: this.props.secondName
    });
  }

  render() {
    if (this.state.mode === "read") {
      return (
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex justify-content-between w-50">
            <div>{this.state.id}</div>
            <div>{this.state.firstName}</div>
            <div>{this.state.secondName}</div>
          </div>
          <div className="d-flex justify-content-end w-25">
            <button className="btn btn-warning" onClick={this.changeMode}>
              edit
            </button>
            <button className="btn btn-danger ml-4" onClick={this.deletePerson}>
              delete
            </button>
          </div>
        </div>
      );
    } else if (this.state.mode === "edit") {
      return (
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-between w-75">
            <input
              className="form-control"
              type="number"
              name="id"
              value={this.state.id}
              onChange={this.handleInput}
            />
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder="Введите имя"
              value={this.state.firstName}
              onChange={this.handleInput}
            />
            <input
              className="form-control"
              type="text"
              name="secondName"
              placeholder="Введите фамилию"
              value={this.state.secondName}
              onChange={this.handleInput}
            />
          </div>
          <div className="d-flex justify-content-end w-25">
            <button className="btn btn-primary" onClick={this.saveChanges}>
              save
            </button>
            <button className="btn btn-danger ml-4" onClick={this.deletePerson}>
              delete
            </button>
          </div>
        </div>
      );
    }
  }
}
