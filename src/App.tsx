import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Enrollee from './pages/enrollee/Enrollee';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';
import CurriculumSelection from './pages/enrollee/components/curriculum-selection/CurriculumSelection';
import CurriculumDrafting from './pages/enrollee/components/curriculum-drafting/CurriculumDrafting';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/enrollee/:enrolleeId' element={<Enrollee />}>
          <Route index element={<CurriculumSelection />} />
          <Route path='curriculum/:curriculumId' element={<CurriculumDrafting /> } />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
