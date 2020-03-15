import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import signinButton from "./images/signinButton.png";
import "../Stylesheets/login.css";
import { render } from "react-dom";
import pic1 from "../Components/images/pic1.jpg";
import pic22 from "../Components/images/pic22.jpg";
import pic3 from "../Components/images/pic3.png";
import pic4 from "../Components/images/pic4.png";
import pic5 from "../Components/images/pic5.png";
import { Slide, Fade } from "react-slideshow-image";

const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const properties2 = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

class Login extends React.Component {
  showPopUp() {
    console.log("Clicked");
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  showPopUp2() {
    console.log("Clicked");
    var popup2 = document.getElementById("myPopup2");
    popup2.classList.toggle("show");
  }

  render() {
    return (
      <div data-layer="7c5fe039-61b7-412a-8bd8-6980e141ecd1" class="web19201">
        <div
          data-layer="1abb2031-d4c0-4165-a2e6-c24a40546b39"
          class="bphcUnite"
        >
          <span class="bphcUnite-0">BPHC </span>
          <span class="bphcUnite-5">Unite</span>
        </div>
        <div
          data-layer="09b02fb1-e63f-46dd-a668-a99eb53d44fe"
          class="aWebPlatformThatBringsTogetherStudentsAndIntegratesVariousFunctionalitiesNowCabSharingclubNoticesAndVariousOtherThingsAtOnePlace"
        >
          A Web Platform that brings together students and integrates various{" "}
          <br />
          functionalities. Now cab sharing, club notices and various other
          <br />
          things at one place!
        </div>
        <button
          data-layer="70838121-41c1-4ee3-a151-efb117d58830"
          class="rectangle1"
        >
          View More
        </button>
        <div
          data-layer="bf668dd1-0f5d-4604-8aa8-d65123232696"
          class="rectangle2"
        ></div>
        <div
          data-layer="1ab27cc1-9e48-41ec-b836-fce9c8058025"
          class="rectangle3"
        ></div>
        <div
          data-layer="2e6a0a11-d254-4ba7-8a3a-fbd637dcc089"
          class="studentLogin"
        >
          Student Login
        </div>
        <div
          data-layer="11712fd0-65ff-4f73-affc-528387370808"
          class="rectangle4"
        ></div>
        <div
          data-layer="a24b63a3-5b99-4c70-8b75-616ccf8ab9cb"
          class="loginAsAdmin"
        >
          Login as Admin
        </div>
        <button
          data-layer="16af46dc-0c06-4cc2-9fc7-cb7818024444"
          class="rectangle5"
        >
          Home
        </button>
        <button
          data-layer="6796f089-8564-4d71-a081-30980f257a62"
          class="rectangle6"
          onClick={this.showPopUp}
        >
          Developers
          <span className="popuptext" id="myPopup">
            <div>
              <div className="Developers">DEVELOPERS</div>
              <div className="slide-container">
                <Fade {...properties}>
                  <div className="each-slide">
                    <div className="slide1">
                      <img className="img1" src={pic1}></img>
                      <div className="text1">
                        SUKRIT KAPIL
                        <br></br>UI/UX Design (PO)
                      </div>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div className="slide2">
                      <img className="img2" src={pic22}></img>
                      <div className="text2">
                        KUMAR PRANJAL
                        <br></br>UI/UX Design (SM)
                      </div>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div className="slide3">
                      <img className="img3" src={pic3}></img>
                      <div className="text3">
                        KARTHIK SHETTY
                        <br></br>UI/UX Design (DEV)
                      </div>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div className="slide4">
                      <img className="img3" src={pic4}></img>
                      <div className="text4">
                        NISHIT CHOUHAN
                        <br></br>Backend (DEV)
                      </div>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div className="slide5">
                      <img className="img3" src={pic5}></img>
                      <div className="text5">
                        DEEPAK GEORGE
                        <br></br>Backend (DEV)
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </span>
        </button>
        <button
          data-layer="15b84006-cb08-4799-aaf3-fc2598762f16"
          className="rectangle7"
          onClick={(this.showPopUp, this.showPopUp2)}
        >
          Contact
          <span className="popuptext2" id="myPopup2">
            <div className="heading">CONTACTS</div>
            <div className="slide-container2">
              <Slide {...properties2}>
                <div className="each-slide2">
                  <div className="slide1">
                    <div className="text1">
                      Sukrit<br></br>Phone - +91 7095430574
                      <br></br>Email - f20180205@hyderabad.bits-pilani.ac.in
                    </div>
                  </div>
                </div>
                <div className="each-slide2">
                  <div className="slide2">
                    <div className="text2">
                      Kumar Pranjal<br></br>Phone - +91 8544015518
                      <br></br>Email - f20180163@hyderabad.bits-pilani.ac.in
                    </div>
                  </div>
                </div>
                <div className="each-slide2">
                  <div className="slide3">
                    <div className="text3">
                      Karthik Shetty<br></br>Phone - +91 9326371794
                      <br></br>Email - f20180141@hyderabad.bits-pilani.ac.in
                    </div>
                  </div>
                </div>
                <div className="each-slide2">
                  <div className="slide4">
                    <div className="text4">
                      Nishit Chouhan<br></br>Phone - +91 9039272023
                      <br></br>Email - f20180446@hyderabad.bits-pilani.ac.in
                    </div>
                  </div>
                </div>
                <div className="each-slide2">
                  <div className="slide5">
                    <div className="text5">
                      Deepak George<br></br>Phone - +91 9900076490
                      <br></br>Email - f20180244@hyderabad.bits-pilani.ac.in
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </span>
        </button>
        <a
          data-layer="9c527eec-2e40-4551-afdf-5afcf345b641"
          class="rectangle8"
          href="/auth/google"
        ></a>
        <div
          data-layer="4bc243ac-a273-4e21-ac98-980bd669f67c"
          class="signInWithGoogle"
        >
          Sign In with Google
        </div>
        <button
          data-layer="22c82d5d-7ae7-4326-802b-0e7684d4ee92"
          class="rectangle9"
        >
          Feedback
        </button>
        <div
          data-layer="858c4d8b-181e-4676-b19b-d86b89179c52"
          class="icons8LondonCab641"
        ></div>
        <div
          data-layer="ee3be183-94bb-4981-b694-7d13b2921c89"
          class="icons8BuyForChange64"
        ></div>
        <div
          data-layer="ca1fcfd2-19b2-4505-8858-806a240d975f"
          class="icons8Monday64"
        ></div>
        <div
          data-layer="4e285ec4-e84d-4859-a988-96f1908f94da"
          class="icons8Paper64"
        ></div>
        <div
          data-layer="5698ef36-c80b-46b4-a2d8-85bb94237ba5"
          class="cabSharing"
        >
          Cab Sharing
        </div>
        <div
          data-layer="78718413-2dd9-494a-af64-846c9d65b300"
          class="personalCalendar"
        >
          Personal Calendar
        </div>
        <div
          data-layer="d9aec28c-8f91-40bc-9bee-23ebb33bf481"
          class="buyAndSell"
        >
          Buy and Sell
        </div>
        <div
          data-layer="ca6dd340-e047-4aa5-83e1-c81eadc8eac0"
          class="clubNotices"
        >
          Club Notices
        </div>
        <div
          data-layer="b5dd896e-b13c-404f-ab65-a27d50e3a43b"
          class="clickIconsForMoreDetails"
        >
          Click icons for more details
        </div>
        <div
          data-layer="a137f89e-cfa5-44bb-9b12-d69ac6a18798"
          class="icons8Teamwork641"
        ></div>
        <div data-layer="caf91e3e-e2c4-4247-809c-d21a6914ba95" class="topIdeas">
          Top Ideas
        </div>
        <div
          data-layer="ba2df682-43ea-4921-b9bb-59afd5707df6"
          class="icons8Google48"
        ></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

export default connect(mapStateToProps)(Login);
