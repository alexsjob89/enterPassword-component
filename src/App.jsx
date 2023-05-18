import React,{useState} from "react";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import './App.css';

function App() {

const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [locked, setLocked] = useState(true);
const [staySignedIn, setStaySignedIn] = useState(false);

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
  if (e.target.value === '') {
    setLocked(true);
  } else {
    setLocked(false);
  }
};

const handleShowPassword = () => {
  setShowPassword(!showPassword);
};

const handleResetPassword = () => {
  setPassword('');
  setLocked(true);
};

const handleStaySignedIn = () => {
  setStaySignedIn(!staySignedIn);
};


  return (
    <div className="App">

    <label htmlFor="password">Password:</label>

      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <button onClick={handleShowPassword}>
        {showPassword ? <AiFillEyeInvisible color="blue" size={18} /> : <AiFillEye color="blue" size={18} />}
      </button>

      <button onClick={handleResetPassword}>Reset Password</button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={staySignedIn}
          onChange={handleStaySignedIn}
        />
        Stay Signed In
      </label>
      <br />
      <button disabled={locked}>Continue</button>

    </div>
  );
}

export default App;
