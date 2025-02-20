import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const BreadcrumbNav = ({ current }) => {
  return (
    <nav className="flex items-center text-sm text-gray-500 mb-6">
      <Link
        to="/"
        className="hover:text-ananda-orange transition-colors duration-300"
      >
        Home
      </Link>
      <ChevronRight size={16} className="mx-2" />
      <span className="text-ananda-orange font-semibold">{current}</span>
    </nav>
  );
};

export default BreadcrumbNav;
