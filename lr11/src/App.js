import React, { Component } from "react";
import Sensor from "./components/Sensor";
import { Input, Button } from "reactstrap";
import "./App.css";

export default class App extends Component {
  state = {
    sensors: [],
    name: ""
  };

  addSensor = (name = this.state.name) => {
    const id = Math.floor(Math.random() * 100000);
    const status = id > 50000 ? "offline" : "online";
    this.setState(prevState => ({
      sensors: prevState.sensors.concat({ id: id, name: name, status: status })
    }));
  };

  handleInput = e => {
    this.setState({ name: e.target.value });
  };

  deleteSensor = id => {
    this.setState(prevState => ({
      sensors: prevState.sensors.filter(sensor => sensor.id !== id)
    }));
  };

  onClick = () => {
    if (this.state.name) {
      this.addSensor();
    }
  };

  componentDidMount() {
    fetch(`https://random-word-api.herokuapp.com/word?key=EFCC1YGX&number=10`)
      .then(data => data.json())
      .then(data => data.map(name => this.addSensor(name)));
  }

  render() {
    return (
      <div className="App">
        <div className="app-container mb-0 mt-4 mx-auto">
          <div className="d-flex justify-content-between flex-wrap">
            {this.state.sensors.map(sensor => (
              <Sensor
                key={sensor.id}
                id={sensor.id}
                title={sensor.name}
                status={sensor.status}
                deleteSensor={this.deleteSensor}
              />
            ))}
          </div>
          <Input
            className="form-control input-lg mb-3"
            value={this.state.name}
            onChange={this.handleInput}
            placeholder="Enter name for sensor"
          />
          <Button color="primary" className="btn-lg" onClick={this.onClick}>
            Add sensor
          </Button>
          '
        </div>
      </div>
    );
  }
}
