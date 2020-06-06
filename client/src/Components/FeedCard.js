import React from "react";
import Axios from "axios";
import { Card, CardBody, CardHeader } from "reactstrap";

class FeedCard extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(e) {
        const feedDetail = {
            name: this.props.name,
            email: this.props.email,
            message: this.props.message,
        };
        Axios.post("/deletefeedback", feedDetail)
            .then((res) => {
                console.log("Deleted Successfully: " + res);
                return window.alert("Deleted Successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <Card style={{ width: "350px" }} className="mt-2">
                <CardHeader>
                    <strong>{this.props.name}</strong>
                </CardHeader>
                <CardBody>
                    <strong>Email:</strong> <br></br>
                    {this.props.email}
                    <p>
                        <strong>Feedback:</strong> <br></br>
                        {this.props.message}
                    </p>
                </CardBody>
                <button className="btn btn-danger" onClick={this.delete}>
                    Delete
                </button>
            </Card>
        );
    }
}

export default FeedCard;
