import React, { useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  //const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="app">
      {/* <h1>Lets build a WhatsApp Clone!</h1> */}
      {!user ? (
        <Login />
      ) : (
        // render out the app here
        <div className="app__body">
          <Router>
            <Sidebar />

            <Switch>
              {/* <Route path="/app"> */}
              <Route path="/rooms/:roomId">
                {/* <Sidebar /> */}
                <Chat />
              </Route>
              <Route path="/">{/* <Chat /> */}</Route>
            </Switch>
          </Router>

          {/* 
          <Sidebar />
          <Chat /> 
          */}

          {/* Sidebar */}
          {/* Chat */}
        </div>
      )}
    </div>
  );
}

export default App;
