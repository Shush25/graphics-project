import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/aboutpage/aboutpage.component";
import Menu from "./components/menu/menu.component";
import Footer from "./components/footer/footer.component";

AOS.init({ easing: "ease-in-out", once: true });

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Menu />
            <Switch>
              <Route exact path="/graphics-project" component={HomePage} />
              <Route
                exact
                path="/graphics-project/about"
                component={AboutPage}
              />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
