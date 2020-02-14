import React from "react"
import CabCard from "./CabCard"
class CabRequests extends React.Component
{
    render()
    {
        return(
            <div className="column is-half pic-container"><center><b>Requests</b></center>
            <CabCard/>
            <CabCard/>
            <CabCard/>
            <CabCard/>
            <CabCard/>
            </div>
        )
        
    }
}

export default CabRequests;