import { useState } from "react";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    if (!userName || !passWord) {
      setError("Username & Password is mandatory");
    } else if (passWord.length < 8) {
      setError("Password must be minimum 8 characters");
    } else {
      setError("");
      setPassWord("");
      setUsername("");
      alert("Form Submitted");
    }
  };
  return (
    <form onSubmit={formSubmit}>
      <h1>Login Form</h1>
      {error && <p>{error}</p>}
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={userName}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={passWord}
          name="username"
          onChange={(e) => setPassWord(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;
