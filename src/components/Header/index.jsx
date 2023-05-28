/* eslint-disable react/prop-types */
import style from "./assets/css/style.module.css";
import { useSelector } from "react-redux";
import Button from "../../UI/button";
import { addProductProps } from "./constants";
import plusIcon from "./assets/images/plus-icon.svg";

function Header({ setIsOpen }) {
  const { username } = useSelector((state) => state.login);

  const handleAddProduct = () => setIsOpen(true);

  return (
    <>
      <div className={`container ${style.container}`}>
        <div className={`row ${style.subContainer} justify-content-between`}>
          <div className={`col ${style.logo} col-3`}>
            Foody<span className={style.logoDot}>.</span>
          </div>
          <div
            className={`col ${style.right} col-6 d-flex gap-4 align-items-center justify-content-end`}
          >
            <Button onClickProps={handleAddProduct} {...addProductProps}>
              <img src={plusIcon} alt="plus-icon"></img>
            </Button>
            <div
              className={`${style.profile} d-flex gap-2 align-items-center justify-content-center`}
            >
              <i className={`${style.profileImage} bi bi-person-circle`}></i>
              <p className={`m-0`}>{window.innerWidth > 500 ? username : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
