import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto max-w-screen-md">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
