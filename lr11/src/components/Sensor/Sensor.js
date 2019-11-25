import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default class Sensor extends Component {
  render() {
    const { id, title, status } = this.props;

    return (
      <Card color={status === "online" ? "success" : "danger"}>
        <CardTitle>{id}</CardTitle>
        <CardBody>{title}</CardBody>
      </Card>
    );
  }
}
