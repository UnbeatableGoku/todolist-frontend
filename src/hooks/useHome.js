import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createTaskAction } from '../store/actions/UserAction';

const useHome = () => {
  const { userDetails, userTaskList } = useSelector((state) => state.user);
  const { register, handleSubmit, reset } = useForm();
  const [taskList, setTaskList] = useState([]);
  const dispatch = useDispatch();

  const handleNewTask = (formData) => {
    dispatch(createTaskAction(formData));
    reset();
  };

  return {
    userDetails,
    userTaskList,
    setTaskList,
    taskList,
    register,
    handleSubmit,
    reset,
    dispatch,
    handleNewTask,
  };
};

export default useHome;
