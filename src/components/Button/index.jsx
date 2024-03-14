import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[15px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    red_A200: "bg-red-A200 text-white-A700",
    green_600: "bg-green-600 text-white-A700",
    yellow_800: "bg-yellow-800 text-gray-800",
  },
};
const sizes = {
  lg: "h-[40px] px-[31px] text-2xl",
  md: "h-[36px] px-3 text-[11px]",
  xs: "h-[27px] px-1.5 text-xs",
  sm: "h-[30px] px-1.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "sm",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["lg", "md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "red_A200", "green_600", "yellow_800"]),
};

export { Button };
