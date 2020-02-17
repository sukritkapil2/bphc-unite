import React from "react";

class CabForm extends React.Component
{
    render()
    {
        return(
            <div className="column is-half">
            <center><b>Form</b></center>
            

<div className="field">
  <label className="label">Departure Time</label>
  <div className="control">
    <div className="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div className="field">
  <div className="control">
    <label className="checkbox">
      <input type="checkbox"/>
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div className="field">
  <div className="control">
    <label className="radio">
      <input type="radio" name="question"/>
      Yes
    </label>
    <label className="radio">
      <input type="radio" name="question"/>
      No
    </label>
  </div>
</div>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-link">Submit</button>
  </div>
  <div className="control">
    <button className="button is-success">Search</button>
  </div>
</div>
            
            </div>
        )

    }
}

export default CabForm;