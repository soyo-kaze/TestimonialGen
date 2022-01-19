import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="Nav">
      <Link href="/">
        <div className="nav__text">TestimonialGen</div>
      </Link>
    </div>
  );
};

export default Header;
