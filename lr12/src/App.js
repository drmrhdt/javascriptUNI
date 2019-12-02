import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    people: [],
    firstName: "",
    secondName: ""
  };

  onChangeInputFirstName = e => {
    this.setState({ firstName: e.target.value });
  };

  onChangeInputSecondName = e => {
    this.setState({ secondName: e.target.value });
  };

  addPerson = () => {
    const id = Math.floor(Math.random() * 10000);
    this.setState(prevState => ({
      people: prevState.people.concat({
        id: id,
        firstName: this.state.firstName,
        secondName: this.state.secondName
      })
    }));
    console.log(this.state);
  };

  onClick = () => {
    this.addPerson();
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.state.people.length
          ? this.state.people.map(person => (
              <div key={Math.random()}>
                {person.id} {person.firstName} {person.secondName}
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            ))
          : null}

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
                onChange={this.onChangeInputFirstName}
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
                onChange={this.onChangeInputSecondName}
              />
            </div>
          </div>
        </form>
        <button className="btn btn-primary" onClick={this.onClick}>
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
