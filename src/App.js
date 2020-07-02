import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Row from "./components/Row" 
import About from "./pages/About";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Container from "./components/Container";
import Project1 from "./pages/Project1"
import Sidebar from "./components/Sidebar"
import Col from "./components/Col"
function App() {
  return (
    <Router>
      <div>
      
        <Header />
      
          
          <Container>
            <Row>
              <Col size="md-3">
          <Sidebar />
              </Col>
              <Col size ="md-9">
          <Route exact path="/" component={About} />
          <Route exact path="/project1" component={Project1} />
          {/* <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} /> */}
            </Col>
          </Row>
        </Container>
       
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

