import { selectIsLoggedIn } from "@redux/slice/userSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Vector from "../../../assets/pictures/Banner/Vector.png";
import { Button, Navbar } from "../../shared";
import "./Landing.scss";

const Landing = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="container landing_parent">
        <img src={Vector} alt="" className="Landing_bg" />

        <div className="landing_body">
          {windowWidth > 430 ? (
            <>
              <h1>Сізді</h1>
              <h1>
                <span>ерекше</span> әлеммен таныстырамыз
              </h1>
            </>
          ) : (
            <h1>
              Сізді <span>ерекше</span> әлеммен таныстырамыз
            </h1>
          )}

          {windowWidth > 430 ? (
            <p>
              Қош келдіңіздер! <span>Jaryq</span> - ерекше қажеттілігі бар балалардың дамуына көмектесетін пайдалы ақпараттар мен қолдау алаңы.
            </p>
          ) : (
            <p>
              Қош келдіңіздер! <span>Jaryq</span> - ерекше қажеттілігі бар балалардың дамуына көмектесетін пайдалы ақпараттар мен қолдау алаңы.
            </p>
          )}

          <div className="landing_ctadiv">
            {/*isLoggedIn ? (
              <Button to="/clubs" className="landing_signup">
                <span>Explore our clubs</span>
              </Button>
            ) : (
              <Button to="/auth/signup" className="landing_signup">
                <span>Sign up Today !</span>
              </Button>
            )*/}

            <div className="separator"></div>

            <div className="landing_ctaimgdiv">
              <div className="landing_ctaimages">
                <img
                  src="https://avatars.githubusercontent.com/u/56752104?v=4"
                  alt=""
                />
                <img
                  src="https://avatars.githubusercontent.com/u/71691473?v=4"
                  alt=""
                />
                <img
                  src="https://avatars.githubusercontent.com/u/94097778?v=4"
                  alt=""
                />
                <img
                  src="https://avatars.githubusercontent.com/u/72697074?v=4"
                  alt=""
                />
              </div>
              <span>Тұрақты қолданушылар 100+.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
