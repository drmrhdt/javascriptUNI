import React, { Component } from "react";
import { Card, CardTitle, CardSubtitle, Button, Badge } from "reactstrap";
import "./Sensor.css";

export default class Sensor extends Component {
  onClick = () => {
    const { id } = this.props;
    this.props.deleteSensor(id);
  };

  render() {
    const { id, title, status } = this.props;

    return (
      <Card className="card-item mb-3 px-3 py-2">
        <CardTitle className="d-flex justify-content-between">
          ID: {id}
          <Badge color={status === "online" ? "success" : "danger"}>
            {status}
          </Badge>
        </CardTitle>
        <CardSubtitle className="text-left d-flex justify-content-between align-items-center">
          TITLE: {title}
          <Button className="btn-sm" onClick={this.onClick}>
            del
          </Button>
        </CardSubtitle>
      </Card>
    );
  }
}
