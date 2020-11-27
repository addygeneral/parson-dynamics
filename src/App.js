import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Option1 from "./Option1";
import Option2 from "./Option2";
import Option3 from "./Option3";

  function App() {
  return (
 <Router>
<div className="app">
<Switch>
   <Route path="/option1">
   <Header />
   <Option1 />
    
    <Footer />
  </Route>

  <Route path="/option2">
  <Header />
  <Option2 />
  
  <Footer />
   </Route>

   <Route path="/option3">
   <Header />
   <Option3 />
   
   <Footer />
   </Route>

  <Route path="/">
    <Header />
    <Home />
    <Footer />
  </Route>

        </Switch>

</div>
      
</Router>
    
  );
}

export default App;
