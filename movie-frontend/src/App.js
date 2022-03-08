import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import TopRated from './components/TopRated';
import PopularMovies from './components/PopularMovies';
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (   
    <div className="fondo">
      <Router>      
        <div className="container-fluid">
          <Header />  
          <div className="btn-group-lg">              
            <Link to="/" className="btn btn-dark">  
              Home
            </Link>
            <NavLink to="/TopRated" className="btn btn-dark" activeClassName="active">  
              Top Rated Movies
            </NavLink>
            <NavLink to="/PopularMovies" className="btn btn-dark" activeClassName="active">  
              Popular Movies
            </NavLink>                   
          </div> 
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/TopRated">
              <TopRated />
            </Route>
            <Route path="/PopularMovies">
              <PopularMovies />
            </Route>
            <Route path="/Movie/:id" exact={true}>
              <MovieDetail />
            </Route>
          </Switch>          
        </div>
        <Footer />
      </Router> 
    </div>          
  )
}

export default App;
