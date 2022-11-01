import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Home from "./components/home/home.component";
import About from "./components/about/about.component";
import NoMatch from "./components/noMatch/noMatch.component";
import AccommodationPage from "./components/accommodation/accommodation.component";

const RouteConfig = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default RouteConfig;
/*

            <Route path="/about">
              <About />
            </Route>
            <Route path="/accommodation/:accommodationId">
              <AccommodationPage datas={this.props.datas} />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
            <Route path="/404">
              <NoMatch />
            </Route>
          </Routes>
          <Footer />*/
