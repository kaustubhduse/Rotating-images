import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Revolution from "./components/Revolution";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="p-[2%]">
        <Navbar />
        <Revolution />
      </div>
      <Footer />
      <div className="mt-[2%]"></div>
    </div>
  );
}

export default App;
