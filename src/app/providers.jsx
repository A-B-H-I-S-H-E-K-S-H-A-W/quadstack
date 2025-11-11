"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Navbar } from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <Navbar />
      {children}
      <Footer />
    </Provider>
  );
}
