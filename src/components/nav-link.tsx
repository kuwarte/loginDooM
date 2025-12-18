"use client";
import Link from "next/link";
import { useState } from "react";
import Loading from "./loading";

export default function NavLink({ href, children, className }: { 
  href: string; 
  children: React.ReactNode; 
  className?: string; 
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <>
      {loading && <Loading />}
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>
    </>
  );
}