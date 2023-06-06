"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./page.scss";

const Home = () => {
  return (
    <motion.main
      className="main-w"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="top-w">
        <Typewriter
          options={{
            strings: ["Discover!", "Learn!", "Inspire!"],
            autoStart: true,
            loop: true,
          }}
        />
        <img src="/books.png" alt="books.png" className="books-banner" />
      </div>
    </motion.main>
  );
};

export default Home;
