import React from "react"
import axios from 'axios'
import { connect } from 'react-redux'
import UpcomingRideCard from './UpcomingRideCard'

class UpcomingRide extends React.Component {
    constructor() {
        super()
        this.state = {
            requests: []
        }
        
    }
    render() {
        axios.get("/api/member")
            .then((response) => {
                const data = response.data;
                this.setState({ requests: data })
                console.log(data)
            })
            .catch((err) => console.log(err));
            console.log(this.state.requests)
         const myrequests = this.state.requests.map((item, index) => {
                                item.members.map((val, index) => { {
                                    console.log(val)
                                    if(val===this.props.user.name){    
                                        return (
                                            <UpcomingRideCard
                                                key={index}
                                                dateofrequest={item.date} from={item.from} to={item.to}
                                            ></UpcomingRideCard>
                                        );
                                    }        
                                }
                            });
         });
         console.log(myrequests)
         return (
            <div >
                {myrequests}
            </div>
            )

    
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth

    };
};

export default connect(mapStateToProps)(UpcomingRide);