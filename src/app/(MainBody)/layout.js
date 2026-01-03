"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import { ToastContainer } from "react-toastify";
import Customizer from "../../containers/customizer";
import "../../index.scss";

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

/* --------------------------------------------
   NProgress config (App Router safe)
--------------------------------------------- */

NProgress.configure({
  showSpinner:
    process.env.NEXT_PUBLIC_NPROGRESS_SHOW_SPINNER === "true",
});

/* --------------------------------------------
   Layout content
--------------------------------------------- */
function LayoutContent({ children }) {
  const pathname = usePathname();
  const [goingUp, setGoingUp] = useState(false);

  /* Route change loader */
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, [pathname]);

  /* Tap-to-top */
  useEffect(() => {
    const handleScroll = () => {
      setGoingUp(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {children}

      <div
        className="tap-top"
        style={{ display: goingUp ? "block" : "none" }}
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      >
        <div>
          <i className="fa fa-angle-double-up" />
        </div>
      </div>

      <div className="buy-now d-block">
        <a
          href="https://1.envato.market/GjA3vm"
          target="_blank"
          className="p-2"
        >
          <i className="fa fa-shopping-cart text-white" />
        </a>
      </div>
    </>
  );
}

/* --------------------------------------------
   Root layout export
--------------------------------------------- */
export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary>
        <LayoutContent>{children}</LayoutContent>
        <Customizer />
        <ToastContainer />
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
