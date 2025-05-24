// Import statements
import { authTypeOptions } from "@/static/Constants";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Select from "react-select";
import rightabstract from "../../assets/pictures/authpages/authbanner.png";
import { Button, Navbar } from "../../components/shared";
import { useAuth } from "../../hooks/useAuth";
import { GoogleAuth } from "../../service/MilanApi";
import "./index.scss";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    userType: authTypeOptions[1],
  });
  const [errors, setErrors] = useState({});

  // Auth functions
  const { authenticateUser, loading } = useAuth("signup");
  const [showPassword, setshowPassword] = useState(false);

  // Handlers
  const handleGoogle = async () => {
    const response = await GoogleAuth();
    window.location.href = response;
  };

  return (
    <>
      <Helmet>
        <title>NgoWorld | SignUp</title>
        <meta
          name="description"
          content="Welcome to the Club's registration page. Provide all the needed credentials and join us."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <Navbar />

      <div className="signup_parent">
        <div className="signup_container">
          <div className="signup_container_left">
            <div className="header">
              <h1>Sign Up</h1>
            </div>
            <form
              className="auth_form"
              onSubmit={(e) => {
                e.preventDefault();
                authenticateUser(credentials, setErrors);
              }}
            >
              <div className="auth_form_body">
                <div className="auth_element">
                  <div className="auth_dropdown"></div>
                </div>

                <div className="auth_element auth_element_mobileOnly">
                  <label className="auth_label">
                    Account Type
                    <span>*</span>
                  </label>

                  <Select
                    options={authTypeOptions}
                    styles={{
                      container: (baseStyles) => ({
                        ...baseStyles,
                        fontFamily: "Outfit, sans-serif",
                        fontSize: "15px !important",
                      }),
                    }}
                    onChange={(e) => {
                      setCredentials((prev) => {
                        return {
                          ...prev,
                          userType: e,
                          email: "",
                          password: "",
                          name: "",
                        };
                      });
                    }}
                    defaultValue={authTypeOptions[1]}
                  />
                </div>
                <div className="auth_element ">
                  <label className="auth_label">
                    {credentials.userType.value === "individual"
                      ? "Full Name"
                      : "Organization Name"}{" "}
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="auth_input"
                    placeholder={
                      credentials.userType.value === "individual"
                        ? "John Doe"
                        : "Save Tigers"
                    }
                    value={credentials.name}
                    onChange={(e) => {
                      setCredentials((prev) => {
                        return {
                          ...prev,
                          name: e.target.value,
                        };
                      });
                    }}
                  />
                </div>

                <div className="auth_element">
                  <label className="auth_label">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    value={credentials.email}
                    className="auth_input"
                    placeholder="john@gmail.com"
                    onChange={(e) => {
                      setCredentials((prev) => {
                        return {
                          ...prev,
                          email: e.target.value,
                        };
                      });
                    }}
                  />
                  <p>{errors.email}</p>
                </div>

                <div className="auth_element">
                  <label className="auth_label">
                    Password <span>*</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="auth_input"
                    placeholder="********"
                    value={credentials.password}
                    min={8}
                    onChange={(e) => {
                      setCredentials((prev) => {
                        return {
                          ...prev,
                          password: e.target.value,
                        };
                      });
                    }}
                  />
                  {showPassword ? (
                    <FaEye
                      onClick={() => {
                        setshowPassword(!showPassword);
                      }}
                      className="togglePassword_icon"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => {
                        setshowPassword(!showPassword);
                      }}
                      className="togglePassword_icon"
                    />
                  )}
                  <p>{errors.password}</p>
                </div>
              </div>
              <div className="auth_footer">
                <Button
                  type="submit"
                  className="auth_submit"
                  isLoading={loading}
                  disabled={
                    loading ||
                    !credentials.email ||
                    !credentials.password ||
                    !credentials.name
                  }
                >
                  Sign Up
                </Button>

                <div className="signup_or">
                  <hr />
                  <span>or</span>
                  <hr />
                </div>

                <button className="btn authpage_oauth" onClick={handleGoogle}>
                  <FcGoogle
                    style={{ fontSize: "18px", marginRight: "0.7rem" }}
                  />
                  Continue with Google
                </button>

                <div className="auth_forgot_section">
                  <Link to={"/auth/signin"}>
                    {" "}
                    Already have an account? Login
                  </Link>
                </div>
              </div>
            </form>
          </div>

          {/* Right abstract */}
          <div className="signup_rightabstract">
            <div className="signup_topbtn">
              <div className="custom-checkbox">
                <input id="status" type="checkbox" name="status" />
                <label htmlFor="status">
                  <div
                    className="status-switch"
                    data-unchecked="Organization"
                    data-checked="Individual"
                    onClick={() => {
                      setCredentials((prev) => {
                        return {
                          userType:
                            prev.userType.value === "individual"
                              ? authTypeOptions[1]
                              : authTypeOptions[0],
                          email: "",
                          password: "",
                          name: "",
                        };
                      });
                      setErrors({});
                    }}
                  ></div>
                </label>
              </div>
            </div>
            <img src={rightabstract} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
