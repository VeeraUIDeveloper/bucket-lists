import React from "react";

import "./Footer.css";

const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  console.log(copyrightYear);
  return (
    <div className="footer">
      <p>&copy; Copyright {copyrightYear} - All rights reserved.</p>
    </div>
  );
};

export default Footer;
