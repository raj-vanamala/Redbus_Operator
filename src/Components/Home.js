import React from 'react'
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import '../Styles/Home.css';
import AddBusRequest from './AddBusRequest';

export default function Home() {

    return (
        <Router>
          <div>
            <Container className = "navigationBar">
              <div>
                <Link to="/" style={{color : "white"}}>Add Bus Request</Link>
              </div>
            </Container>
    
            <Switch>
              <Route path="/">
                <AddBusRequest />
              </Route>
              
            </Switch>
          </div>
        </Router>
      );

}