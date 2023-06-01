import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoute from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
