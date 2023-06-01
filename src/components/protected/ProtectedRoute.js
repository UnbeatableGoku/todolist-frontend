//Third Party Imports
import { Navigate } from 'react-router-dom';

//Custom Components
import useAuth from '../../hooks/useAuth';

//this component is use to protect the component from the user who doesn't login
const ProtectedRoute = ({ children }) => {
  const { authUser, isLoading } = useAuth();

  if (isLoading === true) {
    return <h1>...Loading</h1>;
  }
  if (isLoading === false) {
    if (authUser === 1) {
      return children;
    }
    if (authUser === 0) {
      return <Navigate replace to='/login' />;
    }
  }
};

export default ProtectedRoute;
