import React from "react";
import "../Stylesheets/main3.css";
import Axios from "axios";
import FeedCard from "./FeedCard";

const initialState = {
    feedback: [],
};

class AdminFeedback extends React.Component {
    constructor() {
        super();
        this.state = initialState;
        this.goBack = this.goBack.bind(this);
    }

    goBack(event) {
        window.location.href = "/admin";
    }

    onClick(event) {
        window.localStorage.removeItem("authToken");
        window.location.href = "/adminlogin";
    }

    render() {
        Axios.get("/getfeedback")
            .then((res) => {
                console.log("Feedbacks" + res.data);
                const feeds = res.data;
                this.setState({ feedback: feeds });
            })
            .catch((err) => {
                console.log("Error in fetching feedback" + err);
            });

        const feedarr = this.state.feedback;
        const feedcards = feedarr.map((item, index) => {
            return (
                <FeedCard
                    key={index}
                    name={item.name}
                    email={item.email}
                    message={item.message}
                ></FeedCard>
            );
        });
        return (
            <div className="d-flex">
                <div className="container">
                    <div className="row" style={{ backgroundColor: "#191a1a" }}>
                        <div className="col-12 col-sm-6 offset-sm-3 text-center mt-3">
                            <h2 style={{ color: "floralwhite" }}>
                                Feedback from Users
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 offset-sm-3">
                            <div className="d-inline-block scrollable mt-3">
                                {feedcards}
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

export default AdminFeedback;
