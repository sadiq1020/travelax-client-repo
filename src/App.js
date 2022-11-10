import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
