import { useState } from 'react';
import { registerUser } from "../../firebase/auth";
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      setSuccess(true);
      setError('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err.message);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>CREATE<br />your account</h2>

        {success && !error && <p className="success-msg">User registered successfully!</p>}
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
            placeholder="Password"
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