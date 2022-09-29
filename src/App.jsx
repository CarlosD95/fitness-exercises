import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer'; 
import ExerciseDetail from './Pages/ExerciseDetail';
import Home from './Pages/Home';

function App() {

  return (
    <Box width='400px' m='auto' sx={{ width: { xl: '1488px' }}}>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/exercise/:id' element={ <ExerciseDetail /> } />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
