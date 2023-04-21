import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#f2f2f2",
    padding: "5px",
    textAlign: "center",
  };
  return (
    <>
      <div style={headerStyle}>
        <h1>Inventory Control</h1>
      </div>
    </>
  );
};

export default Header;
