import { useState } from "react";
import { loginUser } from "../../firebase/auth"; 
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      setSuccess(true);
      setError("");
    } catch (err) {
      console.error(err.message);
      setError("Login failed. Please check your email and password.");
      setSuccess(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>LOG IN to your <br /> account</h2>

        {success && <p className="success-msg">Logged in successfully!</p>}
        {error && <p className="error-msg">{error}</p>}

        <form className="login-form" onSubmit={handleSubmit}>
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

          <button type="submit">Log in</button>

          <div className="login-register-link">
              Don’t have an account? <a href="/register">Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;