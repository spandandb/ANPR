import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing'
import About from './components/About'
import Upload from './components/Upload'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='h-full bg-[#14044B]'>
        <BrowserRouter>
        <div className='m-16 bg-[#35055B] rounded-md shadow-xl shadow-pink-500'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Upload />} />

          </Routes>
        </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
