/* eslint-disable react/prop-types */
import { useState } from "react";

function Button(props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const {
    text,
    children,
    backgroundColor,
    backgroundColorHover,
    color,
    padding,
    borderRadius,
    boxShadow,
    gap,
    fontWeight,
    display,
    alignItems,
    onClickProps,
  } = props;

  const style = {
    gap,
    backgroundColor: isHover ? backgroundColorHover : backgroundColor,
    color,
    padding,
    borderRadius,
    boxShadow,
    fontWeight,
    display,
    alignItems,
  };

  const handleClick = () => {
    if (onClickProps) {
      onClickProps();
    }
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={style}
    >
      {children}
      {text}
    </button>
  );
}

export default Button;
