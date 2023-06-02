import { Button, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import useHome from '../../hooks/useHome';
import style from './Home.module.css';
import {
  createTaskAction,
  getUserTaskAction,
} from '../../store/actions/UserAction';
import TaskList from '../task/TaskList';
import axios from 'axios';

const Home = () => {
  const {
    userDetails,
    userTaskList,
    taskList,
    register,
    handleSubmit,
    setTaskList,
    dispatch,
    handleNewTask,
  } = useHome();

  const handleTaskSubmit = (formData) => {
    handleNewTask(formData);
  };

  useEffect(() => {
    dispatch(getUserTaskAction());
  }, [dispatch]);

  useEffect(() => {
    setTaskList(userTaskList);
  }, [userTaskList]);

  const handleLogout = async () => {
    const { data } = await axios.post(
      'https://todolist-backend-gamma.vercel.app/logout',{}
      ,
        {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  return (
    <div>
      <h1>Welcome {userDetails.userName}</h1>
      <div>
        <form onSubmit={handleSubmit(handleTaskSubmit)}>
          <TextField
            id='standard-basic'
            label='Title'
            variant='standard'
            {...register('title')}
          />
          <TextField
            id='standard-basic'
            label='Description'
            variant='standard'
            {...register('description')}
          />
          <Button variant='contained' color='success' type='submit'>
            Submit
          </Button>
        </form>
        <Button
          variant='contained'
          color='warning'
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
        <div className={style.listWrapper}>
          {taskList.length > 0 ? (
            taskList.map((taskItem) => (
              <TaskList key={taskItem._id} taskItem={taskItem} />
            ))
          ) : (
            <h1>No Task </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
