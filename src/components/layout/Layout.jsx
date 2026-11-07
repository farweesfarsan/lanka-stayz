import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/** Scroll to #hash target after route change, otherwise to top */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 50);
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}
