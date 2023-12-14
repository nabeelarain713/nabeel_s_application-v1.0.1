import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[35px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    red_300: "bg-red-300 text-white-A700",
    black_900: "bg-black-900",
    indigo_50_01: "bg-indigo-50_01",
    teal_A100: "bg-teal-A100",
  },
  outline: {
    black_900: "border-2 border-black-900 border-solid text-black-900",
  },
};
const sizes = { xs: "p-0.5", sm: "p-[7px]", md: "p-3", lg: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "indigo_50_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["red_300", "black_900", "indigo_50_01", "teal_A100"]),
};

export { Button };
