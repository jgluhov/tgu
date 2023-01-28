import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Curriculum from './pages/curriculum/Curriculum';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/curriculum/:enrolleeId' element={<Curriculum />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
