import React, { Component } from "react";

import "../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import Building from "../components/listingPage/buildingWeb";
import Coding from "../components/listingPage/codingFun";
import InterestArticle from "../components/listingPage/interestingArticles";
import SingleArticle from "../components/listingPage/singleArticlepage";
import addNewArticle from "../components/listingPage/addNewArticlepage";
import notFoundPage from "../components/notFoundPage";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    // res: the return from callApi()
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    // get data from http://localhost:5000/api/hello
    // react makes requests as needed directly to the api server (5000)
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router className="App">
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <Link to="/">Home</Link>
              <Link to="/about-us">About</Link>
              <Link to="/building-web">Building Web</Link>
              <Link to="/coding-fun">Coding Fun</Link>
              <Link to="/interesting-articles">Interesting Articles</Link>
              <Link to="/addnewarticle">Add New Article</Link>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/building-web" component={Building} />
            <Route
              path="/building-web/:date/:title"
              component={SingleArticle}
            />
            <Route exact path="/coding-fun" component={Coding} />
            <Route path="/coding-fun/:title" component={SingleArticle} />
            <Route
              exact
              path="/interesting-articles"
              component={InterestArticle}
            />
            <Route
              path="/interesting-articles/:title"
              component={SingleArticle}
            />
            <Route path="/addnewarticle" component={addNewArticle} />
            {/* <Route component={notFoundPage} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
