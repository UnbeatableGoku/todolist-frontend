// React Import
import { useEffect } from 'react';

//Third Party Import
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

//custome Hook
import useSignup from '../../hooks/useSignup';

//action
import { clearError } from '../../store/slices/UserSlice';

//assets
import style from './Signup.module.css';
import login from '../../assets/login.jpg';

//Parent Component is Routes.js
const Signup = () => {
  const {
    handleFormSubmit,
    handleSubmit,
    register,
    sweetAlertForError,
    dispatch,
    navigateToLogin,
    errors,
    userError,
    userCreate,
    authUser,
    navigateToHome,
  } = useSignup();

  useEffect(() => {
    if (userCreate) {
      navigateToLogin();
    }
    dispatch(clearError());
  }, [userError, userCreate]);

  useEffect(() => {
    if (authUser === 1) {
      navigateToHome();
    }
  }, [authUser]);

  const handleSignup = (formData) => {
    handleFormSubmit(formData);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.formParent}>
        <h1>Sign Up</h1>
        <form
          className={style.formWrapper}
          onSubmit={handleSubmit(handleSignup)}
        >
          <>
            <TextField
              type='text'
              variant='standard'
              label='First Name'
              {...register('firstName')}
            />

            <p style={{ color: 'red', margin: '0px' }}>
              {errors.firstName?.message}
            </p>
            <TextField
              type='text'
              label='Last Name'
              variant='standard'
              {...register('lastName')}
            />
            <p style={{ color: 'red', margin: '0px' }}>
              {errors.lastName?.message}
            </p>
            <TextField
              type='text'
              label='User Name'
              variant='standard'
              {...register('userName')}
            />
            <p style={{ color: 'red', margin: '0px' }}>
              {errors.userName?.message}
            </p>
          </>
          <TextField
            type='text'
            label='Email'
            variant='standard'
            {...register('email')}
          />
          <p style={{ color: 'red', margin: '0px' }}>{errors.email?.message}</p>

          <TextField
            type='password'
            label='Password'
            variant='standard'
            {...register('password')}
          />
          <p style={{ color: 'red', margin: '0px' }}>
            {errors.password?.message}
          </p>

          <TextField
            sx={{ my: 2 }}
            variant='standard'
            type='date'
            placeholder='dateOfBirth'
            {...register('dateOfBirth')}
          />
          <p style={{ color: 'red', margin: '0px' }}>
            {errors.dateOfBirth?.message}
          </p>

          <Box sx={{ textAlign: 'left' }}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row>
              <FormControlLabel
                type='radio'
                value='male'
                control={<Radio />}
                label='male'
                {...register('gender')}
              />
              <FormControlLabel
                type='radio'
                value='female'
                control={<Radio />}
                label='female'
                {...register('gender')}
              />
            </RadioGroup>
            <p style={{ color: 'red', margin: '0px' }}>
              {errors.gender?.message}
            </p>
          </Box>

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

        <Link to='/login'>
          <Button variant='outlined'>Login</Button>
        </Link>
      </div>
      <div className={style.imgDiv}>
        <img width='100%' src={login} alt='Login ' />
      </div>
    </div>
  );
};

export default Signup;
