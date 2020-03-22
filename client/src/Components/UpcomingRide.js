import React from "react"
import axios from 'axios'
import { connect } from 'react-redux'
import UpcomingRideCard from './UpcomingRideCard'

class UpcomingRide extends React.Component {
    constructor() {
        super()
        this.state = {
            requests: [],flag:0
        }
        
    }
    render() {
        axios.get("/api/member")
            .then((response) => {
                const data = response.data;
                this.setState({ requests: data })
            })
            .catch((err) => console.log(err));
            console.log(this.state.requests)
         const myrequests =this.state.requests.map((item, index) => {
                                    var flag = 0;
                                    item.members.map((val) => {
                                        {

                                            
                                            if (val === this.props.user.name) {
                                                flag = 1
                                            }


                                        }

                                    });
                                    if (flag === 1) {
                                        return (
                                            <UpcomingRideCard
                                                key={index}
                                                dateofrequest={item.date} from={item.from} to={item.to}
                                                
                                            ></UpcomingRideCard>
                                        );
                                    }
                                });

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