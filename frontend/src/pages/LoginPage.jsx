import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PAINTING_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Flowers_in_a_Glass_Vase%2C_by_Abraham_Mignon.jpg/800px-Flowers_in_a_Glass_Vase%2C_by_Abraham_Mignon.jpg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, user } = useAuth();

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    }
  }, [user, navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      if (data.role === 'admin') {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed. Check your credentials.");
    }
  };


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .lp-body {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .lp-container {
          width: 100%;
          max-width: 1060px;
          min-height: 700px;
          display: flex;
          border-radius: 16px;
          overflow: hidden;
          border: 1.5px solid #2a3a4a;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          background: #fff;
        }

        /* ── LEFT PANEL ── */
        .lp-left {
          flex: 0 0 52%;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 56px;
          position: relative;
        }

        .lp-left::after {
          content: '';
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, #d1d9e0 30%, #d1d9e0 70%, transparent);
        }

        .lp-heading {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 600;
          color: #111;
          margin-bottom: 10px;
          letter-spacing: -0.3px;
        }

        .lp-subtext {
          font-size: 0.875rem;
          color: #6b7b8d;
          line-height: 1.6;
          margin-bottom: 36px;
          font-weight: 300;
        }

        .lp-label {
          font-size: 0.78rem;
          font-weight: 500;
          color: #333;
          margin-bottom: 7px;
          display: block;
        }

        .lp-input-wrap {
          margin-bottom: 18px;
        }

        .lp-input {
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

        .lp-input:focus {
          border-color: #1b3a52;
          box-shadow: 0 0 0 3px rgba(27,58,82,0.1);
          background: #fff;
        }

        .lp-input::placeholder { color: #aab4be; }

        .lp-forgot {
          display: block;
          text-align: right;
          font-size: 0.78rem;
          color: #1b3a52;
          text-decoration: none;
          margin-top: -10px;
          margin-bottom: 24px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.15s;
          background: none;
          border: none;
          padding: 0;
        }
        .lp-forgot:hover { opacity: 0.7; }

        .lp-btn-signin {
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
          transition: background 0.2s, transform 0.1s;
        }
        .lp-btn-signin:hover { background: #142c3f; transform: translateY(-1px); }
        .lp-btn-signin:active { transform: translateY(0); }

        .lp-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 22px 0;
          color: #aab4be;
          font-size: 0.8rem;
        }
        .lp-divider::before, .lp-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8ee;
        }

        .lp-btn-social {
          width: 100%;
          padding: 11px 16px;
          border: 1.5px solid #dde3ea;
          border-radius: 8px;
          background: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 12px;
          transition: border-color 0.2s, background 0.2s;
          font-weight: 400;
        }
        .lp-btn-social:hover { border-color: #b0bbc6; background: #f8fafc; }

        .lp-signup-row {
          margin-top: 24px;
          text-align: center;
          font-size: 0.83rem;
          color: #6b7b8d;
        }
        .lp-signup-row a {
          color: #1b3a52;
          font-weight: 500;
          text-decoration: none;
        }
        .lp-signup-row a:hover { text-decoration: underline; }

        .lp-footer {
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
        .lp-right {
          flex: 0 0 48%;
          position: relative;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
        }

        .lp-painting-frame {
          position: absolute;
          top: 28px; left: 28px; right: 28px; bottom: 28px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.05);
        }

        .lp-painting-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          filter: saturate(1.05) contrast(1.02);
        }
      `}</style>

      <div className="lp-body">
        <div className="lp-container">
          {/* LEFT */}
          <div className="lp-left">
            <h1 className="lp-heading">Welcome Back</h1>
            <p className="lp-subtext">
              Today is a new day. It's your day. You shape it.<br />
              Sign in to start managing your projects.
            </p>

            <form onSubmit={handleSignIn}>
              <div className="lp-input-wrap">
                <label className="lp-label" htmlFor="email">Email</label>
                <input
                  className="lp-input"
                  type="email"
                  id="email"
                  placeholder="Example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                />
              </div>

              <button type="button" className="lp-forgot">Forgot Password?</button>

              <button type="submit" className="lp-btn-signin">Sign in</button>
            </form>



            <p className="lp-signup-row">
              Don't you have an account? <Link to="/signup">Sign up</Link>
            </p>

            <span className="lp-footer">© 2023 ALL RIGHTS RESERVED</span>
          </div>

          {/* RIGHT */}
          <div className="lp-right">
            <div className="lp-painting-frame">
              <img
                className="lp-painting-img"
                src={PAINTING_URL}
                alt="Dutch Golden Age floral painting"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
