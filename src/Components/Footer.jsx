import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#f2f2f5",
    padding: "5px",
    textAlign: "center",
    positionL: "fixed",
  };
  return (
    <>
      <div style={footerStyle}>
        <p>Inventory Control Footer</p>
      </div>
    </>
  );
};

export default Footer;
