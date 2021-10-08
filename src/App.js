import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Constacts from './components/Constacts/Constacts';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Background></Background>
            <Home></Home>


            <About></About>
            <Services></Services>
            <Constacts></Constacts>
            <Footer></Footer>

          </Route>

          <Route path='/about'>
            <About></About>
            <Footer></Footer>
          </Route>

          <Route path='/services'>
            <Services></Services>
            <Footer></Footer>
          </Route>

          <Route path='/constacts'>
            <Constacts></Constacts>
            <Footer></Footer>
          </Route>
          <Route path='/background'>
            <Background></Background>
          </Route>

          <Route path='/footer'>
            <Footer></Footer>
          </Route>

          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
