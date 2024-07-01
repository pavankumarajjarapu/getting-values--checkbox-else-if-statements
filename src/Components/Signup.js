import React, { useRef } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";

function Signup() {
  let paraRef = useRef();
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let maleRBRef = useRef();
  let femaleRBRef = useRef();
  let stateRef = useRef();
  let ageRef = useRef();
  // let navigateDashboard=useLocation();
  let languageKnown = {
    eng: false,
    tel: false,
    hin: false,
    kan: false,
  };
  let genderValid;
  let maritalStatus;
  let salutation;
  let ageFactor;
  let final = () => {
    if (genderValid == "male") {
      salutation = "Mr.";
    } else {
      if (maritalStatus == "single") {
        salutation = "Miss.";
      } else {
        salutation = "Mrs.";
      }
    }
    paraRef.current.innerHTML = `${salutation} ${
      firstNameInputRef.current.value
    } ${lastNameInputRef.current.value} are coming from ${
      stateRef.current.value
    } you know ${languageKnown.eng == true ? "English," : ""} ${
      languageKnown.tel == true ? "Telugu," : ""
    } ${languageKnown.hin == true ? "Hindi," : ""} ${
      languageKnown.kan == true ? "Kannada" : ""
    } languages. your a ${ageFactor}`;
  };
  return (
    <div>
      <Navbar></Navbar>

      <from className="form" style={{width:"500px"}}>
        <h3>signup</h3>
        <div>
          <label>FirstName:</label>
          <input type="text" ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>LastName:</label>
          <input type="text" ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>Age:</label>
          <input
            type="Number"
            ref={ageRef}
            onChange={() => {
              // let ageValid=Number(age.current.value)
              let ageValid =Number( ageRef.current.value);
              if (ageValid >= 0 && ageValid <= 1) {
                ageFactor = "Infant";
            } else if (ageValid > 1 && ageValid <= 3) {
                ageFactor = "Toddler";
            } else if (ageValid > 3 && ageValid <= 5) {
                ageFactor = "Preschooler";
            } else if (ageValid > 5 && ageValid <= 12) {
                ageFactor = "Child";
            } else if (ageValid >= 10 && ageValid <= 12) {
                ageFactor = "Preteen/Tween";
            } else if (ageValid >= 13 && ageValid <= 19) {
                ageFactor = "Teenager/Adolescent";
            } else if (ageValid >= 20 && ageValid <= 39) {
                ageFactor = "Young Adult";
            } else if (ageValid >= 40 && ageValid <= 59) {
                ageFactor = "Middle-aged Adult";
            } else if (ageValid >= 60) {
                ageFactor = "Senior/Older Adult";
            } 
            
            }}
          ></input>
        </div>
        <div>
          <label>Choose your State:</label>
          <select name="states" className="select" ref={stateRef}>
            <option value="AP">Andhra Pradesh (AP)</option>
            <option value="KA">Karnataka (KA)</option>
            <option value="KL">Kerala (KL)</option>
            <option value="TN">Tamil Nadu (TN)</option>
            <option value="TG">Telangana (TG)</option>
            <option value="PY">Puducherry (PY)</option>
            <option value="LD">Lakshadweep (LD)</option>
            <option value="AN">Andaman and Nicobar Islands (AN)</option>
            <option value="GA">Goa (GA)</option>
            <option value="MH">Maharashtra (MH)</option>
          </select>
        </div>
        <div>
          <label> Gender</label>
          <input
            type="radio"
            name="gender"
            ref={maleRBRef}
            onChange={() => {
              if (maleRBRef.current.checked == true) {
                genderValid = "male";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Male</label>
          <input
            type="radio"
            name="gender"
            ref={femaleRBRef}
            onChange={() => {
              if (femaleRBRef.current.checked == true) {
                genderValid = "female";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Female</label>
        </div>
        <div>
          <label> Marital Status</label>
          <input
            type="radio"
            name="marriage"
            onChange={(single) => {
              if (single.target.checked == true) {
                maritalStatus = "single";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Single</label>
          <input
            type="radio"
            name="marriage"
            onChange={(married) => {
              if (married.target.checked == true) {
                maritalStatus = "married";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Married</label>
        </div>
        <div>
          <label style={{ width: "auto" }}>Languages Known:</label>
          <input
            type="checkbox"
            onChange={(tel) => {
              if (tel.target.checked == true) {
                languageKnown.tel = true;
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>TEL</label>
          <input
            type="checkbox"
            onChange={(tel) => {
              if (tel.target.checked == true) {
                languageKnown.eng = true;
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>ENG</label>
          <input
            type="checkbox"
            onChange={(tel) => {
              if (tel.target.checked == true) {
                languageKnown.hin = true;
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>HIN</label>
          <input
            type="checkbox"
            onChange={(hin) => {
              if (hin.target.checked == true) {
                languageKnown.kan = true;
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>KAN</label>
        </div>
        <button
          onClick={() => {
            final();
            // navigateDashboard("/dashboard",{state:{greeting:`Hi ${firstNameInputRef.current.value} welcome to Reacts!`}})
          }}
          type="button"
        >
          {" "}
          summary
        </button>
        <p ref={paraRef}></p>
      </from>
      <p>
        already you have account? then{" "}
        <Link to={"/login"} className="bottomLink">
          click me.
        </Link>
      </p>
    </div>
  );
}

export default Signup;
