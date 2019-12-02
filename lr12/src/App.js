import React, { Component } from "react";
import List from "components/List";
import "./App.css";

class App extends Component {
  state = {
    people: [],
    firstName: "",
    secondName: ""
  };

  onChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changePerson = (id, firstName, secondName) => {
    this.setState(prevState => ({
      people: prevState.people.map(person =>
        person.id === id
          ? { id: id, firstName: firstName, secondName: secondName }
          : person
      )
    }));
  };

  addPerson = () => {
    if (this.state.firstName && this.state.secondName) {
      const id = Math.floor(Math.random() * 10000);
      this.setState(prevState => ({
        people: prevState.people.concat({
          id: id,
          firstName: this.state.firstName,
          secondName: this.state.secondName
        })
      }));
      this.clearInputs();
    }
  };

  clearInputs = () => {
    this.setState({ firstName: "", secondName: "" });
  };

  deletePerson = id => {
    this.setState(prevState => ({
      people: prevState.people.filter(person => person.id !== id)
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="App w-75 mx-auto pt-4">
        {this.state.people.length ? (
          <List
            people={this.state.people}
            deletePerson={this.deletePerson}
            changePerson={this.changePerson}
          />
        ) : null}
        <form>
          <div className="form-group row">
            <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">
              Имя
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder="Введите имя"
                value={this.state.firstName}
                name="firstName"
                onChange={this.onChangeInput}
              />
            </div>
          </div>
        </form>
        <form>
          <div className="form-group row">
            <label
              htmlFor="inputSecondName"
              className="col-sm-2 col-form-label"
            >
              Фамилия
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputSecondName"
                placeholder="Введите фамилию"
                value={this.state.secondName}
                name="secondName"
                onChange={this.onChangeInput}
              />
            </div>
          </div>
        </form>
        <button className="btn btn-primary" onClick={this.addPerson}>
          Добавить
        </button>
        {/* <button classNameName="btn btn-primary" disabled> */}
        {/* Добавить
        </button> */}
      </div>
    );
  }
}

export default App;
