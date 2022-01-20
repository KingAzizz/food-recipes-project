
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ListsRecipes from './components/ListsRecipes';
import Navbar from './components/Navbar';
function App() {
  
  return (
      <Router>
    <div className="App">
      <Navbar />
    <Routes> 
    
    <Route path="/" element={<ListsRecipes />} />

    </Routes>
    </div>
  </Router>
  );
}

export default App;
