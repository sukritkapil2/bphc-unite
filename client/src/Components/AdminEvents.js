import React from "react";
import "../Stylesheets/main3.css";
import axios from "axios";
import EventApprovalCard from "./EventApprovalCard";

class AdminEvents extends React.Component {
    constructor() {
        super();
        this.state = { events: [] };
        this.onClick = this.onClick.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    onClick(event) {
        window.localStorage.removeItem("authToken");
        window.location.href = "/adminlogin";
    }

    goBack(event) {
        window.location.href = "/admin";
    }

    render() {
        axios
            .get("/api/events/getall")
            .then((response) => {
                const data = response.data;
                this.setState({ events: data });
            })
            .catch((err) => {
                console.log(err);
            });
        const myevents = this.state.events.map((item, index) => {
            return (
                <EventApprovalCard
                    key={index}
                    eventName={item.eventName}
                    status={item.status}
                    eventAddr={item.eventAddr}
                    action={this.forceUpdate}
                ></EventApprovalCard>
            );
        });

        return (
            <div className="d-flex">
                <div className="container">
                    <div className="row" style={{ backgroundColor: "#191a1a" }}>
                        <div className="col-12 col-sm-6 offset-sm-3 text-center mt-3">
                            <h2 style={{ color: "floralwhite" }}>
                                Event Management
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 offset-sm-3">
                            <div className="d-inline-block scrollable mt-3">
                                {myevents}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-sm-6 offset-sm-4">
                            <button
                                className="btn btn-primary btn-large buttonlogout ml-5"
                                onClick={this.goBack}
                            >
                                Back
                            </button>
                            <button
                                className="btn btn-danger btn-large buttonlogout ml-4"
                                onClick={this.onClick}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminEvents;
