import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSchema, path } from '../constant';
import { loginUserAction } from '../store/actions/UserAction';
import Swal from 'sweetalert2';
import useAuth from './useAuth';

const useLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { validUser, userError } = useSelector((state) => state.user);
  const { authUser } = useAuth();
  const navigateToHome = () => {
    navigate(path.home);
  };

  const handleFormSubmit = (formData) => {
    dispatch(loginUserAction(formData));
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
    register,
    handleFormSubmit,
    handleSubmit,
    navigateToHome,
    reset,
    errors,
    validUser,
    userError,
    dispatch,
    sweetAlertForError,
    authUser,
  };
};

export default useLogin;
