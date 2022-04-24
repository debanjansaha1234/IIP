import './App.css';
import Homepage from './Components/Homepage';

import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Disease from './Components/Disease';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route exact path='/Depression' element={<Disease/>}></Route>
        <Route exact path='/PSTD' element={<Disease/>}></Route>
        <Route exact path='/Bipolar' element={<Disease/>}></Route>
        <Route exact path='/Addiction' element={<Disease/>}></Route>
        <Route exact path='/Schizophenia' element={<Disease/>}></Route>
        <Route exact path='/404' element={<Disease/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
