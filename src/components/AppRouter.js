import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/constants";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth"

export const AppRouter = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);

  return user ? 
    (
      <Switch>
        {privateRoutes.map(({path, Component}) => 
          <Route key={path} path={path} component={Component} exact={false} /> 
        )}
        <Redirect to={CHAT_ROUTE} />
      </Switch>
    )
    :
    ( 
      <Switch>
                {publicRoutes.map(({path, Component}) => 
          <Route key={path} path={path} component={Component} exact={false} /> 
        )}
        <Redirect to={LOGIN_ROUTE} />
      </Switch>
    )
}