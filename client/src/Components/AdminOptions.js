import React from "react";
import "../Stylesheets/main2.css";
import { Button, Card, CardBody, CardHeader } from "reactstrap";

const initialstate = {
    email: "",
    password: "",
};

class AdminOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialstate;
        this.onEventClick = this.onEventClick.bind(this);
        this.onFeedbackClick = this.onFeedbackClick.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    onEventClick(e) {
        console.log("Sending Post Request");
        e.preventDefault();
        return (window.location.href = "/adminevents");
    }

    onFeedbackClick(e) {
        return (window.location.href = "/adminfeedback");
    }

    onLogout(e) {
        window.localStorage.removeItem("authToken");
        window.location.href = "/adminlogin";
    }

    render() {
        return (
            <div className="col-12 col-sm-4 offset-sm-4 mt-5">
                <Card>
                    <CardHeader className="bg-primary text-center">
                        <strong style={{ color: "white" }}>
                            Administrator Options
                        </strong>
                    </CardHeader>
                    <CardBody>
                        <Button
                            type="submit"
                            className="btn btn-warning btn-block btn-large"
                            onClick={this.onEventClick}
                        >
                            Event Management
                        </Button>
                        <Button
                            type="submit"
                            className="btn btn-warning btn-block btn-large"
                            onClick={this.onFeedbackClick}
                        >
                            View Feedback
                        </Button>
                        <br></br>
                        <Button
                            type="goback"
                            className="btn btn-danger"
                            onClick={this.onLogout}
                        >
                            Logout
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default AdminOptions;
