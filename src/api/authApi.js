import axios from 'axios';
import { useCallback } from 'react';
import { Api, path } from '../constant';

export const createUser = (userData) => {
  return Api.post({
    url: path.signApi,
    data: userData,
  });
};

export const authUser = (userData) => {
  return Api.post({
    url: path.authApi,
    data: userData,
  });
};

export const validateUser = () => {
  return Api.get({
    url: path.protectedApi,
  });
};

export const getUserTask = () => {
  return Api.get({
    url: path.getTaskApi,
  });
};

export const createUserTask = (userData) => {
  return Api.post({
    url: path.createTaskApi,
    data: userData,
  });
};

export const updateTaskStatus = (data) => {
  return Api.put({
    url: `${path.updateTaskApi}`,
    data: data,
  });
};

export const deleteTask = (data) => {
  return Api.delete({
    url: path.deleteTaskApi + '/' + data.id,
  });
};
