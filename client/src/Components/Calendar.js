import React from "react"
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";

class Calendar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            startDate : new Date()
        };
    }

    handleChange = date =>{
        
        this.setState({
            startDate:date
        },()=>{
            this.sendData();
            console.log(this.state.startDate)

        })
        
    }

    sendData = () => {
        this.props.setDate(this.state.startDate);
    }

    render()
    {
        return(
            <Flatpickr
                data-enable-time
                value={this.state.startDate}
                onChange={this.handleChange}
            />
        )
    }
}

export default Calendar;