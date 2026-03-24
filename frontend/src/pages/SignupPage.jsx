import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PAINTING_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Rachel_Ruysch_-_Flowers_in_a_Glass_Vase_-_Google_Art_Project.jpg/800px-Rachel_Ruysch_-_Flowers_in_a_Glass_Vase_-_Google_Art_Project.jpg";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();
  const { signup, user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    try {
      await signup(formData);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed.");
    }
  };


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .sp-body {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .sp-container {
          width: 100%;
          max-width: 1060px;
          min-height: 750px;
          display: flex;
          border-radius: 16px;
          overflow: hidden;
          border: 1.5px solid #2a3a4a;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          background: #fff;
        }

        /* ── LEFT PANEL ── */
        .sp-left {
          flex: 0 0 52%;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 56px;
          position: relative;
        }

        .sp-left::after {
          content: '';
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, #d1d9e0 30%, #d1d9e0 70%, transparent);
        }

        .sp-heading {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 600;
          color: #111;
          margin-bottom: 10px;
          letter-spacing: -0.3px;
        }

        .sp-subtext {
          font-size: 0.875rem;
          color: #6b7b8d;
          line-height: 1.6;
          margin-bottom: 30px;
          font-weight: 300;
        }

        .sp-label {
          font-size: 0.78rem;
          font-weight: 500;
          color: #333;
          margin-bottom: 7px;
          display: block;
        }

        .sp-input-wrap {
          margin-bottom: 16px;
        }

        .sp-input {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid #dde3ea;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          color: #222;
          background: #f8fafc;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .sp-input:focus {
          border-color: #1b3a52;
          box-shadow: 0 0 0 3px rgba(27,58,82,0.1);
          background: #fff;
        }

        .sp-input::placeholder { color: #aab4be; }

        .sp-btn-signup {
          width: 100%;
          padding: 13px;
          background: #1b3a52;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          letter-spacing: 0.3px;
          margin-top: 10px;
          transition: background 0.2s, transform 0.1s;
        }
        .sp-btn-signup:hover { background: #142c3f; transform: translateY(-1px); }
        .sp-btn-signup:active { transform: translateY(0); }

        .sp-login-row {
          margin-top: 24px;
          text-align: center;
          font-size: 0.83rem;
          color: #6b7b8d;
        }
        .sp-login-row a {
          color: #1b3a52;
          font-weight: 500;
          text-decoration: none;
        }
        .sp-login-row a:hover { text-decoration: underline; }

        .sp-footer {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.7rem;
          color: #b0bbc6;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        /* ── RIGHT PANEL ── */
        .sp-right {
          flex: 0 0 48%;
          position: relative;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
        }

        .sp-painting-frame {
          position: absolute;
          top: 28px; left: 28px; right: 28px; bottom: 28px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.05);
        }

        .sp-painting-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          filter: saturate(1.05) contrast(1.02);
        }
      `}</style>

      <div className="sp-body">
        <div className="sp-container">
          {/* LEFT */}
          <div className="sp-left">
            <h1 className="sp-heading">Create Account</h1>
            <p className="sp-subtext">
              Join us today. It's the first step towards a better journey.
              Sign up to unlock all features.
            </p>

            <form onSubmit={handleSignUp}>
              <div className="sp-input-wrap">
                <label className="sp-label" htmlFor="name">Full Name</label>
                <input
                  className="sp-input"
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="sp-input-wrap">
                <label className="sp-label" htmlFor="email">Email Address</label>
                <input
                  className="sp-input"
                  type="email"
                  id="email"
                  placeholder="Example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="sp-input-wrap">
                <label className="sp-label" htmlFor="password">Password</label>
                <input
                  className="sp-input"
                  type="password"
                  id="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="sp-input-wrap">
                <label className="sp-label" htmlFor="confirmPassword">Confirm Password</label>
                <input
                  className="sp-input"
                  type="password"
                  id="confirmPassword"
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="sp-input-wrap">
                <label className="sp-label" htmlFor="profileImage">Profile Image</label>
                <input
                  className="sp-input"
                  type="file"
                  id="profileImage"
                  accept="image/*"
                  onChange={(e) => setProfileImage(e.target.files[0])}
                />
              </div>


              <button type="submit" className="sp-btn-signup">Create Account</button>
            </form>

            <p className="sp-login-row">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>

            <span className="sp-footer">© 2023 ALL RIGHTS RESERVED</span>
          </div>

          {/* RIGHT */}
          <div className="sp-right">
            <div className="sp-painting-frame">
              <img
                className="sp-painting-img"
                src={PAINTING_URL}
                alt="Rachel Ruysch - Flowers in a Glass Vase"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
