import React from "react";
import "../Stylesheets/main2.css";
import axios from "axios";
import {
    Card,
    CardBody,
    CardHeader,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";

const initialstate = {
    email: "",
    password: "",
};

class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialstate;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        if (e.target.id === "email") {
            this.setState({ email: e.target.value });
        } else if (e.target.id === "password") {
            this.setState({ password: e.target.value });
        }
    };

    onSubmit(e) {
        console.log("Sending Post Request");
        e.preventDefault();
        const form = {
            email: this.state.email,
            password: this.state.password,
        };
        axios
            .post("/adminlogin", form)
            .then((response) => {
                console.log("Got the response:" + response);
                window.localStorage.setItem("authToken", response.token);
                return (window.location.href = "/admin");
            })
            .catch((err) => {
                console.log(err);
                return window.alert("Invalid email or password");
            });
    }

    goBack(e) {
        return (window.location.href = "/");
    }

    render() {
        return (
            <div className="col-12 col-sm-4 offset-sm-4 mt-5">
                <Card>
                    <CardHeader className="bg-primary text-center">
                        <strong style={{ color: "white" }}>
                            Login as Admin
                        </strong>
                    </CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                name="u"
                                required="required"
                                onChange={this.onChange}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                id="password"
                                name="p"
                                required="required"
                                onChange={this.onChange}
                            ></Input>
                        </FormGroup>
                        <Button
                            type="submit"
                            onClick={this.onSubmit}
                            className="btn btn-success"
                        >
                            Let me in.
                        </Button>
                        <Button
                            type="goback"
                            onClick={this.goBack}
                            className="btn btn-danger ml-5"
                        >
                            Home
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default AdminLogin;
