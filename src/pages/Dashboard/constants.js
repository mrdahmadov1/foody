import closeIcon from "./assets/images/close-icon.svg";
import uploadIcon from "./assets/images/upload-icon.svg";

/** GENERAL PROPS */

export const formAddProductProps = {
  closeIcon,
  uploadIcon,
  title: "Add product",
  background: "#38394E",
  position: "absolute",
  leftMobile: 0,
  left: "60%",
  right: 0,
  top: 0,
  bottom: 0,
  padding: "18px 12px",
};

/** BUTTON PROPS */

export const btnCloseProps = {
  backgroundColor: "#C035A2",
  backgroundColorHover: "#D935A2",
  color: "#fff",
  padding: "0px 8px 4px",
  borderRadius: "50%",
};

export const btnUploadImageProps = {
  text: "upload",
  backgroundColor: "#43445A",
  backgroundColorHover: "#48495D",
  color: "#fff",
  width: "100%",
  borderRadius: 6,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
  padding: "18px 0",
};

export const btnCancelProps = {
  text: "Cancel",
  backgroundColor: "#43445A",
  backgroundColorHover: "#48495D",
  color: "#fff",
  padding: "6px 12px",
  borderRadius: 6,
  width: "50%",
};

export const btnCreateProductProps = {
  text: "Create Product",
  backgroundColor: "#C035A2",
  backgroundColorHover: "#D935A2",
  color: "#fff",
  padding: "6px 12px",
  borderRadius: 6,
  width: "50%",
};

/**INPUT PROPS */

export const inputProps = {
  borderRadius: 6,
  padding: "8px 16px",
  margin: "0 0 8px 0",
  width: "100%",
  background: "#5A5B70",
  color: "#fff",
  type: "text",
  border: "1px solid #fff",
};

export const inputNameProps = {
  ...inputProps,
  label: "Name",
};

export const inputDescriptionProps = {
  ...inputProps,
  label: "Description",
};

export const inputPriceProps = {
  ...inputProps,
  label: "Price",
};

export const inputRestaurantsProps = {
  ...inputProps,
  label: "Restaurants",
};
