import React, { lazy, Suspense } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./App.css"

// import About from './components/About'
// import Nav from './components/Nav'
// import Poject from './components/Poject'
// import Resome from './components/Resome'
// import Sidebar from './components/Sidebar'
import { AnimatePresence } from "framer-motion"
import { Route, Switch, useLocation } from "react-router-dom"
import { css } from "@emotion/react";
import { ScaleLoader } from "react-spinners";

const About = lazy(() => import("./components/About"))
const Nav = lazy(() => import("./components/Nav"))
const Resome = lazy(() => import("./components/Resome"))
const Sidebar = lazy(() => import("./components/Sidebar"))
const Poject = lazy(() => import("./components/Poject"))
const Conteck = lazy(() => import("./components/Conteck"))
const Detalse = lazy(() => import("./components/Detalse"))



const App = () => {
  const location = useLocation()
  return (

    <Suspense fallback={<div className="loder" > <ScaleLoader color="white"/> </div>}>
      <div className="container ">
        <div className="row gy-5 mt-0">
          <div className="col-md-3 col-sm-12">
            <Sidebar />
          </div>

          <div className="col-md-9 col-sm-12">
            <div className="main__content">
              <Nav />
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                  <Route exact path="/" component={About} />
                  <Route exact path="/skill" component={Resome} />
                  <Route exact path="/project" component={Poject} />
                  <Route exact path="/project/:id" component={Detalse} />
                  <Route exact path="/conteck" component={Conteck} />
                </Switch>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Suspense>

  )
}

export default App

