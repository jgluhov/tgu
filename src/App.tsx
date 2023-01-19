import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';

const Home = lazy(() => import('./pages/home/Home'))
const Student = lazy(() => import('./pages/student/Student'))

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/students/:studentId' element={<Student />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
