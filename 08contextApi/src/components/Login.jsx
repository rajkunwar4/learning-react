import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser}=useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password});
  };

  return (
    <div className=" ">
      <h3 className="font-semibold text-xl">Login</h3>
      <input
        className="border-2 rounded"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <input
        className="border-2 rounded"
        type="password"
        placeholder="pass"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button 
      className="bg-orange-600 px-2 rounded font-semibold"
      onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
