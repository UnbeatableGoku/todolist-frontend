import { object, string } from 'yup';
import axios from 'axios';

const baseUrl = 'https://todolist-backend-gamma.vercel.app';

export const signupSchema = object({
  firstName: string().required('First Name is required'),
  lastName: string()
    .required('Last Name is required')
    .matches(/^[a-zA-z]+$/, 'Only Text Allowed'),
  userName: string().required('User Name is required'),
  email: string().email('Invalid email').required('Email is required'),
  password: string()
    .required('Password is required')
    .min(4, 'Password should have a minimum length of 4'),
  dateOfBirth: string().required('Date of birth is required'),
  gender: string().required('Gender is required'),
});

export const loginSchema = object({
  email: string().email('Invalid email').required('Email is required'),
  password: string()
    .required('Password is required')
    .min(4, 'Password should have a minimum length of 4'),
});
const baseApi = {
  protectedApi: `${baseUrl}/protected`,
  authApi: `${baseUrl}/auth`,
  signApi: `${baseUrl}/createuser`,
  logoutApi: `${baseUrl}/logout`,
  getUserApi: `${baseUrl}/getuser`,
  getTaskApi: `${baseUrl}/gettask`,
  createTaskApi: `${baseUrl}/createtask`,
  updateTaskApi: `${baseUrl}/updatetask`,
  deleteTaskApi: `${baseUrl}/deletetask`,
};

const routes = {
  login: '/login',
  signup: '/signup',
  home: '/home',
};

export const path = {
  root: '/',
  ...routes,
  ...baseApi,
};

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export class Api {
  static async post(config) {
    const { url, headers = {}, data, ...restConfig } = config;
    return axiosInstance.post(url, data, {
      headers: { ...axiosInstance.defaults.headers, ...headers },
      ...restConfig,
    });
  }
  static async get(config) {
    const { url, headers = {}, ...restConfig } = config;
    return axiosInstance.get(url, {
      headers: { ...axiosInstance.defaults.headers, ...headers },
      ...restConfig,
    });
  }
  static async put(config) {
    const { url, headers = {}, data, ...restConfig } = config;
    return axiosInstance.put(url, data, {
      headers: { ...axiosInstance.defaults.headers, ...headers },
      ...restConfig,
    });
  }
  static async delete(config) {
    const { url, headers = {}, data, ...restConfig } = config;
    return axiosInstance.delete(url, data, {
      headers: { ...axiosInstance.defaults.headers, ...headers },
      ...restConfig,
    });
  }
}
