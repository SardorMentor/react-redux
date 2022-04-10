import React from "react";

import { Header, Movies, Comments } from "./containers";

import "./app.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="main container">
        <Movies />
        <Comments />
      </main>
    </>
  );
};

export default App;
