import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isMobile?: boolean;
}

export default function NavLink({ to, children, isMobile }: NavLinkProps) {
  const baseClasses = isMobile
    ? "block px-3 py-2 text-white hover:text-[#FF0099] transition-colors"
    : "relative group text-white transition-colors";

  return (
    <Link to={to} className={baseClasses}>
      {!isMobile ? (
        <>
          <span className="relative z-10 group-hover:text-[#FF0099] transition-colors">
            {children}
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF0099] group-hover:w-full 
                       transition-all duration-300" />
        </>
      ) : (
        children
      )}
    </Link>
  );
}