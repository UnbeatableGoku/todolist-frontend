import { Button, FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import style from './TaskList.module.css';
import useTaskList from '../../hooks/useTaskList';

const TaskList = ({ taskItem }) => {
  const { actionChange, getCardColor, getCardTextColor, deleteTask } =
    useTaskList();

  const handleDeleteTask = () => {
    deleteTask(taskItem._id);
  };
  const handleTaskChange = (e) => {
    actionChange(e.target.value, taskItem._id);
  };

  return (
    <div
      className={style.listWrapper}
      style={{
        backgroundColor: getCardColor(taskItem.status),
        color: getCardTextColor(taskItem.status),
      }}
    >
      <div className={style.title}> {taskItem.title}</div>
      <div className={style.description}>{taskItem.description}...</div>
      <div className={style.status}>
        <FormControl sx={{ maxWidth: 150 }}>
          <Select
            size='small'
            defaultValue={taskItem.status}
            onChange={(e) => {
              handleTaskChange(e);
            }}
          >
            <MenuItem value='pending'>Pending</MenuItem>
            <MenuItem value='OnGoing'>OnGoing</MenuItem>
            <MenuItem value='completed'>Completed</MenuItem>
          </Select>
        </FormControl>
        {taskItem.status === 'completed' ? (
          <Button
            sx={{ maxWidth: 150 }}
            onClick={handleDeleteTask}
            color='error'
          >
            <DeleteIcon />
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default React.memo(TaskList);
