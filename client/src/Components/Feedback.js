import React from "react";
import Axios from "axios";
import {
    Card,
    CardBody,
    CardHeader,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";

const initialState = {
    name: "",
    email: "",
    message: "",
};

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSend = this.onSend.bind(this);
    }

    onChange = (e) => {
        if (e.target.id === "name") {
            this.setState({ name: e.target.value });
        } else if (e.target.id === "email2") {
            this.setState({ email: e.target.value });
        } else if (e.target.id === "message") {
            this.setState({ message: e.target.value });
        }
    };

    onSend = (e) => {
        console.log("Sending Feedback");
        const namefield = this.state.name;
        const emailfield = this.state.email;
        const messagefield = this.state.message;

        if (
            namefield.length === 0 ||
            emailfield.length === 0 ||
            messagefield.length === 0
        ) {
            return window.alert("One or more fields are empty");
        } else {
            const feed = {
                namefield: this.state.name,
                emailfield: this.state.email,
                messagefield: this.state.message,
            };
            Axios.post("/feedback", feed)
                .then((response) => {
                    console.log("Got the feed response:" + response);
                    return window.alert("Feedback sent successfully");
                })
                .catch((err) => {
                    return window.alert("Could not send feedback. Try Again");
                });
        }
    };

    goBack(e) {
        return (window.location.href = "/");
    }

    render() {
        return (
            <div className="col-12 col-sm-4 offset-sm-4 mt-5">
                <Card>
                    <CardHeader className="bg-primary text-center">
                        <strong style={{ color: "white" }}>
                            Feedback to Developers
                        </strong>
                    </CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                id="name"
                                name="n"
                                required="required"
                                onChange={this.onChange}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email2">Email</Label>
                            <Input
                                type="email"
                                id="email2"
                                name="e"
                                required="required"
                                onChange={this.onChange}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <textarea
                                name="paragraph_text"
                                cols="30"
                                rows="4"
                                id="message"
                                onChange={this.onChange}
                                placeholder="Your Feedback"
                                required="required"
                            ></textarea>
                        </FormGroup>
                        <Button
                            type="goback"
                            className="btn btn-danger"
                            onClick={this.goBack}
                        >
                            Home
                        </Button>
                        <Button
                            type="submit"
                            className="btn btn-success text-center ml-5"
                            onClick={this.onSend}
                        >
                            Send Feedback
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Feedback;
