import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/aboutpage/aboutpage.component";
import { ProfilePage } from "./pages/profilepage/profilepage.component";
import Menu from "./components/menu/menu.component";
import Footer from "./components/footer/footer.component";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

AOS.init({ easing: "ease-in-out", once: true });

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="/graphics-project">
          <ScrollToTop />
          <div>
            <Menu />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/about/:userId" component={ProfilePage} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
