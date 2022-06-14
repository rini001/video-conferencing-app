
import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import styles from "./Join.module.css"
function Join() {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: ""
  });

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let token;

    if(inputValues.token === "rini@0106"){
        token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjJhNzQyNjliODczNzg3YWEyNzBhNzA5Iiwicm9vbV9pZCI6IjYyYTc0ZjhjMjYzMDIyMWM3NWE0NGU2OSIsInVzZXJfaWQiOiJveGVvb3FheSIsInJvbGUiOiJndWVzdCIsImp0aSI6ImYwNThhZmIzLWIyMDgtNGU3Yy05NjZiLTMxYTUwM2Q1Y2RjYyIsInR5cGUiOiJhcHAiLCJ2ZXJzaW9uIjoyLCJleHAiOjE2NTUyMzgwMTl9.r-wJN65Z8d7-dohu5a6ZQc0eUyzyZbCTaPiJaUdtFWM"
    }
    else{
        alert("Enter the correct Passcode")
    }

    hmsActions.join({
      userName: inputValues.name,
      authToken: token
    });
  };


  return (
    <div className={styles.join}>
      <h2>VIRTUAL CONNECT</h2>
      <form onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <input
          required
          value={inputValues.name}
          onChange={handleInputChange}
          id="name"
          type="text"
          name="name"
          placeholder="USERNAME"
        />
        <input
          required
          value={inputValues.token}
          onChange={handleInputChange}
          id="token"
          type="text"
          name="token"
          placeholder="PASSCODE"
        />
      </div>
      <button className={styles.btnJoin}>JOIN NOW</button>
    </form>
    </div>
    
  );
}

export default Join;
