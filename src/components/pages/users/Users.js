import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Card from "../../cards/Card";
import Button from "../../Button";
import { useUserContext } from "../../../contexts/UserContext";
import "./Users.css";

import Login from "./Login";
import Register from "./Register";

const Users = ({ match }) => {
  const { user, loginWithGoogle } = useUserContext();
  const isAlreadyLoggedIn = user !== null;

  if (isAlreadyLoggedIn) {
    return <Redirect to="/" />;
  }

  const { url } = match;

  return (
    <div className="centered-container">
      <header className="users-title">
        <h2>Bienvenido</h2>
      </header>
      <main className="users-main">
        <Card className="users-box">
          <Switch>
            <Route exact path={`${url}/login`} component={Login} />
            <Route exact path={`${url}/register`} component={Register} />
          </Switch>

          <div className="auth-alternatives">
            <p>- O -</p>
            <Button className="google-button" onClick={loginWithGoogle}>
              Inicia sesión con Google
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Users;
