import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
      navigate(user.role === "admin" ? "/admin" : "/dashboard");
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
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sp-body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #F6F7F9;
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
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(53,99,233,0.12);
          background: #fff;
        }

        /* ── LEFT – form panel ── */
        .sp-left {
          flex: 0 0 52%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px 56px;
          position: relative;
          background: #fff;
        }

        .sp-logo {
          font-size: 26px;
          font-weight: 800;
          color: #3563E9;
          letter-spacing: -0.5px;
          margin-bottom: 24px;
        }

        .sp-heading {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1A202C;
          margin-bottom: 8px;
          letter-spacing: -0.3px;
        }

        .sp-subtext {
          font-size: 0.875rem;
          color: #90A3BF;
          line-height: 1.6;
          margin-bottom: 28px;
          font-weight: 500;
        }

        .sp-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #1A202C;
          margin-bottom: 7px;
          display: block;
        }

        .sp-input-wrap {
          margin-bottom: 16px;
        }

        .sp-input {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid #E8ECF0;
          border-radius: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.875rem;
          color: #1A202C;
          background: #F6F7F9;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }

        .sp-input:focus {
          border-color: #3563E9;
          box-shadow: 0 0 0 3px rgba(53,99,233,0.12);
          background: #fff;
        }

        .sp-input::placeholder { color: #C3D4E9; }

        .sp-file-input-label {
          display: block;
          padding: 10px 16px;
          background: #F6F7F9;
          border: 1.5px dashed #C3D4E9;
          border-radius: 10px;
          cursor: pointer;
          text-align: center;
          font-size: 0.8rem;
          color: #596780;
          transition: border-color 0.2s, background 0.2s;
        }
        .sp-file-input-label:hover {
          border-color: #3563E9;
          background: #fff;
          color: #3563E9;
        }

        .sp-btn-signup {
          width: 100%;
          padding: 14px;
          background: #3563E9;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.2px;
          transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
          box-shadow: 0 6px 20px rgba(53,99,233,0.3);
          margin-top: 8px;
        }
        .sp-btn-signup:hover {
          background: #2851C8;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(53,99,233,0.4);
        }
        .sp-btn-signup:active { transform: translateY(0); }

        .sp-login-row {
          margin-top: 24px;
          text-align: center;
          font-size: 0.84rem;
          color: #90A3BF;
          font-weight: 500;
        }
        .sp-login-row a {
          color: #3563E9;
          font-weight: 700;
          text-decoration: none;
        }
        .sp-login-row a:hover { text-decoration: underline; }

        .sp-footer-note {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.7rem;
          color: #C3D4E9;
          letter-spacing: 0.5px;
          white-space: nowrap;
          font-weight: 500;
        }

        /* ── RIGHT – blue panel ── */
        .sp-right {
          flex: 0 0 48%;
          background: #3563E9;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 40px;
          position: relative;
          overflow: hidden;
        }

        .sp-right::before {
          content: '';
          position: absolute;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          top: -80px; left: -60px;
        }
        .sp-right::after {
          content: '';
          position: absolute;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          bottom: -40px; right: -40px;
        }

        .sp-right-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sp-right-logo {
          font-size: 32px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          margin-bottom: 8px;
        }

        .sp-right-tagline {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.7);
          font-weight: 500;
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 240px;
        }

        .sp-feature-list {
          width: 100%;
          max-width: 340px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sp-feature {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-align: left;
        }

        .sp-feature-icon {
          width: 40px;
          height: 40px;
          background: #fff;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .sp-feature-text h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 2px;
        }
        .sp-feature-text p {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.6);
          font-weight: 500;
        }

        @media (max-width: 700px) {
          .sp-right { display: none; }
          .sp-left { flex: 0 0 100%; padding: 40px 28px; }
        }
      `}</style>

      <div className="sp-body">
        <div className="sp-container">

          {/* ── LEFT: Form ── */}
          <div className="sp-left">
            <div className="sp-logo">MORENT</div>

            <h1 className="sp-heading">Create Account</h1>
            <p className="sp-subtext">
              Join thousands of happy customers and<br/>find your dream car today.
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
                  placeholder="example@email.com"
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
                <label className="sp-label" htmlFor="profileImage">Profile Image (Optional)</label>
                <label className="sp-file-input-label">
                  {profileImage ? profileImage.name : "Click to upload image"}
                  <input
                    type="file"
                    id="profileImage"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => setProfileImage(e.target.files[0])}
                  />
                </label>
              </div>

              <button type="submit" className="sp-btn-signup">Create Account</button>
            </form>

            <p className="sp-login-row">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>

            <span className="sp-footer-note">©2022 MORENT. All rights reserved</span>
          </div>

          {/* ── RIGHT: Feature showcase ── */}
          <div className="sp-right">
            <div className="sp-right-inner">
              <div className="sp-right-logo">MORENT</div>
              <p className="sp-right-tagline">
                The best platform for car rental.<br/>Safe, reliable and at a low price.
              </p>

              <div className="sp-feature-list">
                <div className="sp-feature">
                  <div className="sp-feature-icon">#</div>
                  <div className="sp-feature-text">
                    <h4>Fully Insured</h4>
                    <p>All our cars come with full insurance coverage.</p>
                  </div>
                </div>
                <div className="sp-feature">
                  <div className="sp-feature-icon">*</div>
                  <div className="sp-feature-text">
                    <h4>Fast Booking</h4>
                    <p>Book your car in less than 60 seconds.</p>
                  </div>
                </div>
                <div className="sp-feature">
                  <div className="sp-feature-icon">@</div>
                  <div className="sp-feature-text">
                    <h4>Many Locations</h4>
                    <p>Pick up your car from over 500 locations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
