import { AnimatePresence } from "framer-motion";
import React from "react";
import Home from "../components/Home";

const HomePage = () => {
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <Home />
    </AnimatePresence>
  );
};

export default HomePage;
