import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import client from './apollo';
import Paths from './routes';
import Storage from "./plugins/storage";
import AuthContext from "./context/AuthContext";
import { Container } from 'semantic-ui-react';

// Generate Routes
const RoutesComponent = (Paths || []).map((item, idx) => (
  <Route key={idx} path={item.path} element={<item.component />} />
));

const Location = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = Storage.get('token');

  useEffect(() => {
    if (!token) {
      if (location.pathname !== '/login')
        navigate('/login');
    } else {
      setAuth(Storage.decode(token));
      if (location.pathname == '/login')
        navigate('/home');
    }
  }, [location]);

  return (
    <Routes>
      {RoutesComponent}
    </Routes>
  );
}

const App = () => {
  const [auth, setAuth] = useState(null);
  const logout = () => { }
  const setUser = (user) => {
    setAuth(user);
  }
  const data = {
    auth,
    logout,
    setUser
  };
  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={data}>
        <Router>
          <Container>
            <Location auth={auth} setAuth={setAuth} />
          </Container>
        </Router>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
