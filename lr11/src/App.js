import React, { Component } from "react";
import Sensor from "./components/Sensor";
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

  componentDidMount() {
    fetch(`https://random-word-api.herokuapp.com/word?key=O8UGNJDY&number=10`)
      .then(data => data.json())
      .then(data => data.map(name => this.addSensor(name)));
  }

  render() {
    return (
      <div className="App">
        {this.state.sensors.map(sensor => (
          <Sensor
            key={sensor.id}
            id={sensor.id}
            title={sensor.name}
            status={sensor.status}
          />
        ))}
        <input name={this.state.name} placeholder="Enter name for sensor" />
        <button onClick={this.addSensor}>Add new sensor</button>
      </div>
    );
  }
}
