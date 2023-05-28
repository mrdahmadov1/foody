/* eslint-disable react/prop-types */
import { useState } from "react";

function Input(props) {
  const {
    placeholder,
    color,
    background,
    width,
    borderRadius,
    padding,
    margin,
    type,
    onChangeProps,
    border,
  } = props;

  const initialStyle = {
    background,
    color,
    width,
    borderRadius,
    padding,
    margin,
  };

  const [style, setStyle] = useState(initialStyle);

  const handleFocus = () => {
    setStyle({ ...style, border });
  };

  const handleBlur = () => {
    setStyle(initialStyle);
  };

  const handleChange = (e) => {
    if (onChangeProps) {
      onChangeProps(e);
    }
  };

  return (
    <input
      type={type}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={style}
      placeholder={placeholder}
    />
  );
}

export default Input;
