import { Routes, Route } from 'react-router-dom';

// Layouts 


import Landing from './pages/Landing';


const App = () => {
  return (
    <Routes>
      
        <Route path='/' element={<Landing />} />
    
    </Routes>
  )

}

export default App