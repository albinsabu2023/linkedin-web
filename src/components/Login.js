import React, { useState } from "react";
import "../styles/Login.css";
import { auth } from "../backend/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/UserSlice";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const logIntoApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };
  const register = () => {
    if (!name) {
      return alert("name is required");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) =>
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          })
      )
      .catch((err) => {
        alert(err);
        console.log(err.message);
      });
  };
  return (
    <div className="login">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2MM3d3wXnnH-eA0UrWsYyXCfBLIPSOY-WAQ&usqp=CAU"
        alt=""
      />
      <form action="">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="https://propic.com"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@gmail.com"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />

        <button onClick={logIntoApp}>signin</button>
      </form>
      <p>
        Not a member?
        <span onClick={register}>register now</span>
      </p>
    </div>
  );
}

export default Login;
