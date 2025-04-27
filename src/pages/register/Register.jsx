import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../../firebase/auth";
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      setEmail('');
      setPassword('');
      setError('');
      navigate("/login"); 
    } catch (err) {
      console.error(err.message);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>CREATE your <br />account</h2>

        {error && <p className="error-msg">{error}</p>}

        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password (>6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="sign-up-button" type="submit">Sign up</button>

          <label className="terms">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              required
            />
            <a className="terms-link" href="#">I accept the terms and conditions</a>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Register;