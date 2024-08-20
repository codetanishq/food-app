import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-[1439px] md:px-10 mx-auto ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
