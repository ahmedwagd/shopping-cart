import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { words } from './staticWords';


function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <h2>{words.content}</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
