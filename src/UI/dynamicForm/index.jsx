/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../button";
import Input from "../input";
import {
  btnCloseProps,
  btnUploadImageProps,
  inputNameProps,
  inputDescriptionProps,
  inputPriceProps,
  inputRestaurantsProps,
  btnCancelProps,
  btnCreateProductProps,
} from "../../pages/Dashboard/constants";
import style from "./assets/css/style.module.css";
import { useSelector } from "react-redux";

function DynamicForm(props) {
  const { isMobile } = useSelector((state) => state.isMobile);

  const {
    title,
    background,
    position,
    left,
    leftMobile,
    right,
    bottom,
    top,
    padding,
    text,
    closeIcon,
    uploadIcon,
    setIsOpenForm,
  } = props;

  const containerStyle = {
    background,
    position,
    left: !isMobile ? leftMobile : left,
    right,
    top,
    bottom,
    padding,
  };

  const handleClose = () => {
    setIsOpenForm(false);
  };

  const handleUploadImage = () => {};

  return (
    <div style={containerStyle}>
      <header className="d-flex justify-content-between align-items-center">
        <h5 className="m-0">{title}</h5>
        <Button onClickProps={handleClose} {...btnCloseProps}>
          <img src={closeIcon} alt="close-icon" />
        </Button>
      </header>

      <hr />

      <div className="mt-3">
        <p>Upload your {title.split(" ")[1]} image</p>
        <Button onClickProps={handleUploadImage} {...btnUploadImageProps}>
          <img src={uploadIcon} alt="upload-icon" />
          {text}
        </Button>
      </div>

      <div className="mt-3">
        <p>
          {title.split(" ")[0]} your {title.split(" ")[1]} description and
          necessary information
        </p>
        <form className={style.dynamicForm} action="#">
          <Input {...inputNameProps}></Input>
          <Input {...inputDescriptionProps}></Input>
          <Input {...inputPriceProps}></Input>
          <Input {...inputRestaurantsProps}></Input>
        </form>
      </div>

      <div className={style.bottomBtns}>
        <Button {...btnCancelProps}></Button>
        <Button {...btnCreateProductProps}></Button>
      </div>
    </div>
  );
}

export default DynamicForm;
