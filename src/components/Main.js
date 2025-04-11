import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Sidebar } from '../ui_components/Sidebar'
import { Header } from "../ui_components/Header";
import { Footer } from "../ui_components/Footer";
import { Home } from "./Home.js";
import { About } from "./About";
import { Blog } from "./Blog";

export const Main = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-md-12">
            <BrowserRouter>
              <Routes>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
