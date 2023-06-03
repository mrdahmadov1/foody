/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import style from "./assets/css/style.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../UI/button";
import { btnCloseSidebarProps } from "./constants";
import { setIsLoggedIn } from "../../features/login/loginSlice";

function Sidebar({ isOpenSidebar, setIsOpenSidebar }) {
  const { isMobile } = useSelector((state) => state.isMobile);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsOpenSidebar(false);
  };

  const handleLogout = () => {
    handleClose();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/admin/login");
    dispatch(setIsLoggedIn(false));
  };

  return (
    <>
      <div
        className={
          isMobile
            ? style.navList
            : isOpenSidebar
            ? style.mobNavListOpened
            : style.mobNavList
        }
      >
        {!isMobile && (
          <div className={style.logo}>
            <div>
              Foody
              <span className={style.logoDot}>.</span>
            </div>
            <Button onClickProps={handleClose} {...btnCloseSidebarProps}>
              <i className="bi bi-arrow-left-circle"></i>
            </Button>
          </div>
        )}
        <Link
          to="/admin/"
          onClick={handleClose}
          className={`${style.listItem} ${
            pathname === "/admin/" ? `${style.isActive}` : ""
          }
          d-flex align-items-center justify-content-start gap-2`}
        >
          <i className="bi bi-columns-gap" />
          <p className="m-0">Dashboard</p>
        </Link>

        <Link
          onClick={handleClose}
          to="/admin/products"
          className={`${style.listItem} ${
            pathname === "/admin/products" ? `${style.isActive}` : ""
          } d-flex align-items-center justify-content-start gap-2`}
        >
          <i className="bi bi-shop-window"></i>
          <p className="m-0">Products</p>
        </Link>

        <Link
          onClick={handleClose}
          to="/admin/restaurants"
          className={`${style.listItem} ${
            pathname === "/admin/restaurants" ? `${style.isActive}` : ""
          } d-flex align-items-center justify-content-start gap-2`}
        >
          <i className="bi bi-journal-text" />
          <p className="m-0">Restaurants</p>
        </Link>

        <Link
          onClick={handleClose}
          to="/admin/category"
          className={`${style.listItem} ${
            pathname === "/admin/category" ? `${style.isActive}` : ""
          } d-flex align-items-center justify-content-start gap-2`}
        >
          <i className="bi bi-bookmarks" />
          <p className="m-0">Category</p>
        </Link>

        <Link
          onClick={handleClose}
          to="/admin/orders"
          className={`${style.listItem} ${
            pathname === "/admin/orders" ? `${style.isActive}` : ""
          } d-flex align-items-center justify-content-start gap-2`}
        >
          <i className="bi bi-tv" />
          <p className="m-0">Orders</p>
        </Link>

        <Link
          onClick={handleClose}
          to="/admin/offers"
          className={`${style.listItem} ${
            pathname === "/admin/offers" ? `${style.isActive}` : ""
          } d-flex align-items-center justify-content-start gap-2`}
        >
          <i className="bi bi-tag" />
          <p className="m-0">Offer</p>
        </Link>

        <Link
          onClick={handleLogout}
          to="/admin/login"
          className={`${style.listItem} ${
            pathname === "/admin/logout" ? `${style.isActive}` : ""
          } d-flex align-items-center justify-content-start gap-2`}
        >
          <i className="bi bi-box-arrow-in-right" />
          <p className="m-0">Logout</p>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
