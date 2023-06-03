/* eslint-disable react/prop-types */
import style from "./assets/css/style.module.css";
import { useSelector } from "react-redux";
import Button from "../../UI/button";
import { btnAddProductProps, btnToggleSidebarProps } from "./constants";
import plusIcon from "./assets/images/plus-icon.svg";

function Header({ setIsOpenForm, setIsOpenSidebar }) {
  const { username } = useSelector((state) => state.login);
  const { isMobile } = useSelector((state) => state.isMobile);

  const handleBtnAddProduct = () => setIsOpenForm(true);
  const handleBtnOpenSidebar = () => setIsOpenSidebar(true);

  return (
    <>
      <div className={` ${style.container}`}>
        <div className={`row ${style.subContainer} justify-content-between`}>
          <div className="col col-1 d-flex align-items-center justify-content-between">
            {!isMobile && (
              <Button
                onClickProps={handleBtnOpenSidebar}
                {...btnToggleSidebarProps}
              >
                <i className="h4 bi bi-list m-0 p-0"></i>
              </Button>
            )}
            <div className={`col ${style.logo} col-3`}>
              Foody
              <span className={style.logoDot}>.</span>
            </div>
          </div>
          <div
            className={`col ${style.right} col-6 d-flex gap-4 align-items-center justify-content-end`}
          >
            <Button
              onClickProps={handleBtnAddProduct}
              {...btnAddProductProps}
              text={!isMobile ? "" : "Add Product"}
            >
              <img src={plusIcon} alt="plus-icon"></img>
            </Button>
            <div
              className={`${style.profile} d-flex gap-2 align-items-center justify-content-center`}
            >
              <i className={`${style.profileImage} bi bi-person-circle`}></i>
              <p className={`m-0`}>{isMobile ? username : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
