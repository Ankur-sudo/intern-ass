import React from "react";

const sizes = {
  "2xl": "text-lg font-extrabold",
  xl: "text-base font-semibold",
  s: "text-xs font-bold",
  md: "text-sm font-extrabold",
  xs: "text-[10px] font-bold",
  lg: "text-[15px] font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
