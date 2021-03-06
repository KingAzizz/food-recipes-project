
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Alert from './components/Alert';
import Footer from './components/Footer';
import ListsRecipes from './components/ListsRecipes';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  
  return (
      <Router>
    <div className="App">
      <Navbar />
      <Alert />
    <Routes> 
    
    <Route path="/" element={<ListsRecipes />} />
    <Route path="/search" element={<Search />} />

    </Routes>
    <Footer />
    </div>
  </Router>
  );
}

export default App;
