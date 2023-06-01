import { createSlice } from '@reduxjs/toolkit';
import {
  createTaskAction,
  createUserAction,
  deleteTaskAction,
  getAuthorizationAction,
  getUserTaskAction,
  loginUserAction,
  updateStatusAction,
} from '../actions/UserAction';

const initialState = {
  isLoading: false,
  userDetails: {},
  userCreate: false,
  userError: null,
  validUser: false,
  authUser: -1,
  userTaskList: [],
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.userError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userCreate = true;
      })
      .addCase(createUserAction.rejected, (state, action) => {
        state.isLoading = false;
        state.userError = action.payload;
      })
      .addCase(loginUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.validUser = true;
        state.userDetails = action.payload.data;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.isLoading = false;
        state.validUser = false;
        state.userError = action.payload;
      })
      .addCase(getAuthorizationAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAuthorizationAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authUser = 1;
        state.userDetails = { ...state.userDetails, ...action.payload };
      })
      .addCase(getAuthorizationAction.rejected, (state, action) => {
        state.isLoading = false;
        state.authUser = 0;
        state.userError = action.payload;
      })
      .addCase(getUserTaskAction.pending, (state, action) => {})
      .addCase(getUserTaskAction.fulfilled, (state, action) => {
        state.userTaskList = action.payload;
      })
      .addCase(getUserTaskAction.rejected, (state, action) => {
        state.userError = action.payload;
      })
      .addCase(createTaskAction.pending, (state, action) => {})
      .addCase(createTaskAction.fulfilled, (state, action) => {
        state.userTaskList = [...state.userTaskList, action.payload];
      })
      .addCase(createTaskAction.rejected, (state, action) => {
        state.userError = action.payload;
      })
      .addCase(updateStatusAction.pending, (state, action) => {})
      .addCase(updateStatusAction.fulfilled, (state, action) => {
        const newData = state.userTaskList.map((item) => {
          if (item._id === action.payload._id) {
            const newObj = { ...item, ...action.payload };
            return newObj;
          } else {
            return item;
          }
        });
        state.userTaskList = newData;
      })
      .addCase(updateStatusAction.rejected, (state, action) => {
        state.userError = action.payload;
      })
      .addCase(deleteTaskAction.pending, (state, action) => {})
      .addCase(deleteTaskAction.fulfilled, (state, action) => {
        state.userTaskList = [...action.payload];
        //   const newData = state.userTaskList.map((item) => {
        //     if (item._id === action.payload._id) {
        //       const newObj = { ...item, ...action.payload };
        //       return newObj;
        //     } else {
        //       return item;
        //     }
        //   });
        //   state.userTaskList = newData;
      })
      .addCase(deleteTaskAction.rejected, (state, action) => {
        state.userError = action.payload;
      });
  },
});

export const { clearError } = UserSlice.actions;

export default UserSlice.reducer;
