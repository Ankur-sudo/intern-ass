import React from "react";

const sizes = {
  xs: "text-[10px] font-medium",
  lg: "text-sm font-medium",
  s: "text-[11px] font-medium",
  xl: "text-lg font-medium",
  md: "text-[13px] font-normal",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-400 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
