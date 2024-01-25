import './App.css';
import Form from './component/Form/Form.jsx';

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/form' element={<Form/>} />
    </Routes>
    </>
  );
}

export default App;
