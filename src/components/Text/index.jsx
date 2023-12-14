import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold1448: "font-poppins font-semibold",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtInterBold40: "font-bold font-inter",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtInterBold20: "font-bold font-inter",
  txtInterBold20WhiteA700: "font-bold font-inter",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium2294: "font-medium font-poppins",
  txtPoppinsRegular18Bluegray900: "font-normal font-poppins",
  txtInterRegular72: "font-inter font-normal",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsRegular16Gray400: "font-normal font-poppins",
  txtPoppinsSemiBold14WhiteA700: "font-poppins font-semibold",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsSemiBold2641: "font-poppins font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsSemiBold40Black900: "font-poppins font-semibold",
  txtPoppinsRegular36: "font-normal font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsRegular14Gray800: "font-normal font-poppins",
  txtPoppinsRegular23: "font-normal font-poppins",
  txtPoppinsMedium22: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular14Gray600: "font-normal font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsMedium22Gray600: "font-medium font-poppins",
  txtPoppinsRegular60: "font-normal font-poppins",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
