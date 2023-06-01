import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthorizationAction } from '../store/actions/UserAction';

const useAuth = () => {
  const { authUser, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthorizationAction());
  }, [dispatch]);

  return {
    authUser,
    isLoading,
  };
};

export default useAuth;
