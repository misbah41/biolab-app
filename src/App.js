import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home1/Home1";
import Header from "./components/Share/Header/Header";
import About from "./components/About/About/About";
import Blogs from "./components/Blogs/Blogs/Blogs";
import BlogsDetails from "./components/BlogsDetails/BlogsDetails/BlogsDetails";
import ContactRoute from "./components/ContactRoute/ContactRoute/ContactRoute";
import Home2 from "./components/Home2/Home2/Home2";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/home2">
            <Home2 />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blogs />
          </Route>
          <Route path="/blog-details">
            <BlogsDetails />
          </Route>
          <Route path="/contact">
            <ContactRoute />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
