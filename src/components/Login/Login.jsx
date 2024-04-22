import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { signInWithGoogle } from '../../firebase';
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/explore");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await signInWithGoogle(); // Call the function to initiate Google Sign-In
  //   } catch (error) {
  //     console.error('Google Sign-In Error:', error);
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <div className={styles.twologin}>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          {/* <button disabled={submitButtonDisabled} onClick={handleGoogleSignIn}>
            Continue with Google
          </button> */}
          </div>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;