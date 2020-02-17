
import React from "react";
import Calendar from "./Calendar"
class CabForm extends React.Component {


  render() {
    return (
      <div className="column is-half">
        <center><b>Form</b></center>


        <div class="field">
          <label class="label">Departure Time</label>
          {/* <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div> */}
          <Calendar />
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question" />
              Yes
    </label>
            <label class="radio">
              <input type="radio" name="question" />
              No
    </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-success">Search</button>
          </div>
        </div>

      </div>
    )

  }
}

export default CabForm;