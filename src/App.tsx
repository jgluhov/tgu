import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Enrollee from './pages/enrollee/Enrollee';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';
import CurriculumSelection from './pages/enrollee/components/curriculum-selection/CurriculumSelection';
import CurriculumDrafting from './pages/enrollee/components/curriculum-drafting/CurriculumDrafting';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Scrolling from './components/scrolling/Scrolling';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Scrolling>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/enrollee/:enrolleeId' element={<Enrollee />}>
            <Route index element={<CurriculumSelection />} />
            <Route path='curriculum/:curriculumId' element={<CurriculumDrafting /> } />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Scrolling>
    </DndProvider>
  );
}

export default App;
