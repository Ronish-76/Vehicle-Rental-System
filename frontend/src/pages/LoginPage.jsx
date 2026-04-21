import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate(user.role === "admin" ? "/admin" : "/dashboard");
    }
  }, [user, navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      navigate(data.role === "admin" ? "/admin" : "/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed. Check your credentials.");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .lp-body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #F6F7F9;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .lp-container {
          width: 100%;
          max-width: 1060px;
          min-height: 680px;
          display: flex;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(53,99,233,0.12);
          background: #fff;
        }

        /* ── LEFT – form panel ── */
        .lp-left {
          flex: 0 0 52%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 56px;
          position: relative;
          background: #fff;
        }

        .lp-logo {
          font-size: 26px;
          font-weight: 800;
          color: #3563E9;
          letter-spacing: -0.5px;
          margin-bottom: 32px;
        }

        .lp-heading {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1A202C;
          margin-bottom: 8px;
          letter-spacing: -0.3px;
        }

        .lp-subtext {
          font-size: 0.875rem;
          color: #90A3BF;
          line-height: 1.6;
          margin-bottom: 32px;
          font-weight: 500;
        }

        .lp-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #1A202C;
          margin-bottom: 7px;
          display: block;
        }

        .lp-input-wrap {
          margin-bottom: 18px;
        }

        .lp-input {
          width: 100%;
          padding: 13px 16px;
          border: 1.5px solid #E8ECF0;
          border-radius: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.875rem;
          color: #1A202C;
          background: #F6F7F9;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }

        .lp-input:focus {
          border-color: #3563E9;
          box-shadow: 0 0 0 3px rgba(53,99,233,0.12);
          background: #fff;
        }

        .lp-input::placeholder { color: #C3D4E9; }

        .lp-forgot {
          display: block;
          text-align: right;
          font-size: 0.78rem;
          color: #3563E9;
          text-decoration: none;
          margin-top: -10px;
          margin-bottom: 24px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.15s;
          background: none;
          border: none;
          padding: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .lp-forgot:hover { opacity: 0.7; }

        .lp-btn-signin {
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
        }
        .lp-btn-signin:hover {
          background: #2851C8;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(53,99,233,0.4);
        }
        .lp-btn-signin:active { transform: translateY(0); }

        .lp-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 22px 0;
          color: #C3D4E9;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .lp-divider::before, .lp-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #E8ECF0;
        }

        .lp-btn-social {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid #E8ECF0;
          border-radius: 10px;
          background: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.875rem;
          color: #596780;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 12px;
          transition: border-color 0.2s, background 0.2s;
          font-weight: 500;
        }
        .lp-btn-social:hover { border-color: #3563E9; background: #F6F7F9; color: #1A202C; }

        .lp-signup-row {
          margin-top: 24px;
          text-align: center;
          font-size: 0.84rem;
          color: #90A3BF;
          font-weight: 500;
        }
        .lp-signup-row a {
          color: #3563E9;
          font-weight: 700;
          text-decoration: none;
        }
        .lp-signup-row a:hover { text-decoration: underline; }

        .lp-footer-note {
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
        .lp-right {
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

        /* Decorative circles matching hero banners */
        .lp-right::before {
          content: '';
          position: absolute;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          top: -80px; right: -60px;
        }
        .lp-right::after {
          content: '';
          position: absolute;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          bottom: -40px; left: -40px;
        }

        .lp-right-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .lp-right-logo {
          font-size: 32px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          margin-bottom: 8px;
        }

        .lp-right-tagline {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.7);
          font-weight: 500;
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 240px;
        }

        .lp-car-showcase {
          width: 100%;
          max-width: 340px;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 24px;
          margin-bottom: 32px;
        }

        .lp-car-img {
          width: 100%;
          object-fit: contain;
          height: 160px;
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.3));
          transform: scaleX(-1);
        }

        .lp-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
          width: 100%;
          max-width: 340px;
        }

        .lp-stat {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          padding: 16px 12px;
          text-align: center;
        }

        .lp-stat-num {
          font-size: 1.3rem;
          font-weight: 800;
          color: #fff;
          display: block;
          line-height: 1;
          margin-bottom: 4px;
        }

        .lp-stat-label {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.65);
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 700px) {
          .lp-right { display: none; }
          .lp-left { flex: 0 0 100%; padding: 40px 28px; }
        }
      `}</style>

      <div className="lp-body">
        <div className="lp-container">

          {/* ── LEFT: Form ── */}
          <div className="lp-left">
            <div className="lp-logo">MORENT</div>

            <h1 className="lp-heading">Welcome Back</h1>
            <p className="lp-subtext">
              Sign in to access thousands of cars<br />available for rent at the best price.
            </p>

            <form onSubmit={handleSignIn}>
              <div className="lp-input-wrap">
                <label className="lp-label" htmlFor="email">Email</label>
                <input
                  className="lp-input"
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="lp-input-wrap">
                <label className="lp-label" htmlFor="password">Password</label>
                <input
                  className="lp-input"
                  type="password"
                  id="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="button" className="lp-forgot">Forgot Password?</button>

              <button type="submit" className="lp-btn-signin">Sign in</button>
            </form>

            <div className="lp-divider">or continue with</div>

            <button className="lp-btn-social" type="button">
              {/* Google icon */}
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              Sign in with Google
            </button>

            <p className="lp-signup-row">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>

            <span className="lp-footer-note">©2022 MORENT. All rights reserved</span>
          </div>

          {/* ── RIGHT: Blue showcase ── */}
          <div className="lp-right">
            <div className="lp-right-inner">
              <div className="lp-right-logo">MORENT</div>
              <p className="lp-right-tagline">
                The best platform for car rental.<br/>Safe, reliable and at a low price.
              </p>

              <div className="lp-car-showcase">
                <img
                  className="lp-car-img"
                  src="https://images.unsplash.com/photo-1544839800-4f51e3da07d3?auto=format&fit=crop&w=800&q=80"
                  alt="Featured car"
                />
              </div>

              <div className="lp-stats">
                <div className="lp-stat">
                  <span className="lp-stat-num">120+</span>
                  <span className="lp-stat-label">Cars Available</span>
                </div>
                <div className="lp-stat">
                  <span className="lp-stat-num">50k</span>
                  <span className="lp-stat-label">Happy Clients</span>
                </div>
                <div className="lp-stat">
                  <span className="lp-stat-num">4.8</span>
                  <span className="lp-stat-label">Avg. Rating</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}