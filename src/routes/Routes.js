//Third Party Imports
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Home from '../components/home/Home';
import ProtectedRoute from '../components/protected/ProtectedRoute';
import { path } from '../constant';

const MainRoute = () => {
  return (
    <Routes>
      {/* <Route element={}> */}
      <Route
        path={path.home}
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      {/* </Route> */}
      <Route path={path.signup} element={<Signup />} />
      <Route path={path.login} element={<Login />} />

      <Route path={path.root} element={<Navigate replace to='/home' />} />
    </Routes>
  );
};

export default MainRoute;
