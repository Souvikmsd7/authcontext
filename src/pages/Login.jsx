import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { user, login, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password, rememberMe);
  };

  return (
    <div className="loginComponent">
      <div className="card login-div">
        <h5 className="text-center text-white my-4">Enter Your Details</h5>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="form">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check my-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Remember Me
            </label>
          </div>
          <div className="my-4">
            <button
              className="btn btn-warning d-block mx-auto"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
