import React from "react"
import CabCard from "./CabCard"
import axios from 'axios'

class CabRequests extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            requests : []
        }
    }
    
    render()
    {
        
        axios.get("/api/fetchrequests")
            .then((response)=>{
                const data = response.data;
                this.setState({requests:data})
            })
            .catch((err)=>console.log(err));
        const arr = this.state.requests.reverse();
        const cabcards = arr.map((item,index)=>{
            return <CabCard key ={index} requesterName={item.name} dateofrequest = {item.date} message = {item.msg} from={item.from} to={item.to}></CabCard>
        })
        
        return(
            <div className="column is-half pic-container"><center><b>Requests</b></center>
            {cabcards}
            </div>
        )
        
    }
}

export default CabRequests;