import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createUserAction } from '../store/actions/UserAction';
import { yupResolver } from '@hookform/resolvers/yup';
import { path, signupSchema } from '../constant';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userError, userCreate } = useSelector((state) => state.user);
  const { authUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const navigateToLogin = () => {
    navigate(path.login);
  };

  const navigateToHome = () => {
    navigate(path.home);
  };
  const handleFormSubmit = async (formData) => {
    dispatch(createUserAction(formData));
  };

  const sweetAlertForError = (error) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };
  return {
    handleSubmit,
    handleFormSubmit,
    register,
    reset,
    errors,
    userError,
    userCreate,
    sweetAlertForError,
    dispatch,
    authUser,
    navigateToLogin,
    navigateToHome,
  };
};

export default useSignup;
