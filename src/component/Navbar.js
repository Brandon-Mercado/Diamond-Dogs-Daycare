import React from "react";
import wordmark from "../img/wordmark600.png";
import Daycare from "./Daycare";
import DogWalking from "./DogWalking";
import Splash from "./Splash";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import Pricing from "./Pricing";

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-azure-500 to-pink-500  bg-white-800 p-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
              <div className="row">
                <Link to="./">
                  <img alt="Diamond Dogs wordmark1 logo" src={wordmark} />
                </Link>
              </div>
            </div>

            <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
              <div className="font-sans-Ariel  font-bold  text-2xl sm:flex-grow">
                <Link
                  to="./Daycare"
                  className="colors.coolGray block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  Daycare
                </Link>
                <Link
                  to="./DogWalking"
                  className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  Dog Walking
                </Link>
                <Link
                  to="./Pricing"
                  className="block mt-4 sm:inline-block sm:mt-0 text-white-500 hover:text-white"
                >
                  Pricing
                </Link>
              </div>
              <div>
                <Link
                  to="./ContactUs"
                  className="inline-block text-2xl px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </nav>

          <div className="container mt-5 mx-auto px-2"></div>

          <Switch>
            <Route exact path="/">
              <Splash />
            </Route>
            <Route path="/Daycare">
              <Daycare />
            </Route>
            <Route path="/DogWalking">
              <DogWalking />
            </Route>
            <Route path="/Pricing">
              <Pricing />
            </Route>
            <Route path="/ContactUs">
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navbar;
