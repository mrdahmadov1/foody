import style from "./assets/css/style.module.css";
import { useEffect } from "react";
import Button from "../../UI/button";
import Input from "../../UI/input";
import {
  btnSignInProps,
  usernameInputProps,
  passwordInputProps,
} from "./constants";
import heroLogin from "./assets/images/login.png";
import {
  setUsername,
  setPassword,
  checkLogin,
} from "../../features/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isLoggedIn } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/admin/");
    } else {
      navigate("/admin/login");
    }
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance.get("/admin.json").then((response) => {
      dispatch(checkLogin(response.data));
    });
  };

  const handleOnChangeUsername = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handleOnChangePassword = (e) => {
    dispatch(setPassword(e.target.value));
  };

  return (
    <>
      <div className={`${style.wrapper}`}>
        <div className="container">
          <div className="row flex-row-reverse justify-content-center">
            <div
              className={`col-12 col-md-6 col-lg-5 ${style.left} text-center`}
            >
              <img
                className={`${style.heroLogin}`}
                src={heroLogin}
                alt="Admin-Login-Image"
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className={`col col-md-6 col-lg-5 ${style.right} d-flex flex-column mt-4 px-4 m-md-0 p-md-5`}
            >
              <h2 className="text-center mb-3">Welcome Admin</h2>
              <Input
                onChangeProps={handleOnChangeUsername}
                {...usernameInputProps}
              />
              <Input
                onChangeProps={handleOnChangePassword}
                {...passwordInputProps}
              />
              <Button {...btnSignInProps} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
