import { useDispatch } from 'react-redux';
import {
  deleteTaskAction,
  updateStatusAction,
} from '../store/actions/UserAction';

const useTaskList = () => {
  const dispatch = useDispatch();

  const actionChange = async (newStatus, id) => {
    dispatch(
      updateStatusAction({
        newStatus: newStatus,
        id: id,
      })
    );
  };

  const deleteTask = (id) => {
    dispatch(
      deleteTaskAction({
        id: id,
      })
    );
  };

  const getCardColor = (status) => {
    switch (status) {
      case 'pending':
        return 'lightyellow';
      case 'OnGoing':
        return 'lightseagreen';
      case 'completed':
        return 'lightgreen';
      default:
        return 'white';
    }
  };

  const getCardTextColor = (status) => {
    switch (status) {
      case 'pending':
        return 'seagreen';
      case 'OnGoing':
        return 'lightyellow';
      case 'completed':
        return 'darkgreen';
      default:
        return 'white';
    }
  };

  return { actionChange, dispatch, getCardColor, getCardTextColor, deleteTask };
};

export default useTaskList;
