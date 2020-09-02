import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom'; /** função para ter acesso aos componentes das routas ex: path , exact , component */
import { useAuth } from '../hooks/auth';
import Dashboard from '../pages/Dashboard';
/** extender as propriedades que um rota ja tem  */
interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  /** Redirecionando o usario para login, caso  ele nao esteja autenticado e nem logado e ao contratio eu redireciono para dashboard */
  const { user } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
