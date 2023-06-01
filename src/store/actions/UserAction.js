import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  authUser,
  createUser,
  createUserTask,
  deleteTask,
  getUserTask,
  updateTaskStatus,
  validateUser,
} from '../../api/authApi';

const createUserAction = createAsyncThunk(
  'createuser/createUserStatus',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await createUser(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const loginUserAction = createAsyncThunk(
  'loginuser/loginUserStatus',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await authUser(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const getAuthorizationAction = createAsyncThunk(
  'authorizedUser/authorizedUserStatus',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await validateUser();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const getUserTaskAction = createAsyncThunk(
  'userTask/userTaskStatus',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getUserTask();
      return data.response;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const createTaskAction = createAsyncThunk(
  'createtask/createtaskStatus',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await createUserTask(formData);
      return data.response;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const updateStatusAction = createAsyncThunk(
  'updatestatus/updateStatus',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await updateTaskStatus(formData);
      return data.response;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
const deleteTaskAction = createAsyncThunk(
  'deleteTask/deleteTaskStatus',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await deleteTask(formData);
      console.log(data.response);
      return data.response.task;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export {
  createUserAction,
  loginUserAction,
  getAuthorizationAction,
  getUserTaskAction,
  createTaskAction,
  updateStatusAction,
  deleteTaskAction
};
