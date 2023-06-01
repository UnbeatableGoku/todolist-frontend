// React Import
import { useEffect } from 'react';

//Third party imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

//custome Hook
import useLogin from '../../hooks/useLogin';

//action
import { clearError } from '../../store/slices/UserSlice';

//assets
import login from '../../assets/login.jpg';
import style from './Login.module.css';
import { authUser } from '../../api/authApi';

//Parent Component is Routes.js

const Login = () => {
  const {
    register,
    handleSubmit,
    handleFormSubmit,
    navigateToHome,
    dispatch,
    errors,
    reset,
    validUser,
    userError,
    authUser,
    sweetAlertForError,
  } = useLogin();

  useEffect(() => {
    if (validUser) {
      reset();
      navigateToHome();
    }
    
    dispatch(clearError());
  }, [validUser, userError]);

  useEffect(() => {
    if (authUser === 1) {
      navigateToHome();
    }
  }, [authUser]);

  const handleLogin = (formData) => {
    handleFormSubmit(formData);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.formParent}>
        <h1>Login</h1>
        <form
          className={style.formWrapper}
          onSubmit={handleSubmit(handleLogin)}
        >
          <TextField
            type='text'
            label='Email'
            variant='standard'
            {...register('email')}
          />
          <p style={{ color: 'green', margin: '0px' }}>
            {errors.email?.message}
          </p>

          <TextField
            type='password'
            label='Password'
            variant='standard'
            {...register('password')}
          />
          <p style={{ color: 'blue', margin: '0px' }}>
            {errors.password?.message}
          </p>

          <Button
            sx={{ m: 4 }}
            variant='contained'
            type='submit'
            color='success'
            value='Submit'
          >
            Submit
          </Button>
        </form>

        <Link to='/signup'>
          <Button variant='outlined'>Signup </Button>
        </Link>
      </div>
      <div className={style.imgDiv}>
        <img width='100%' src={login} alt='Login ' />
      </div>
    </div>
  );
};

export default Login;
