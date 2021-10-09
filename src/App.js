
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Community from './Pages/Community';


function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/community" component={Community}/>
        </Switch>
        <Footer/>
      </Router>
     

    </div>
  );
}

export default App;
