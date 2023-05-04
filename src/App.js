import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import About from './pages/About';
import Productos from './pages/Productos';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';

import Sidenav from './componentes/Sidenav';

class Welcome extends React.Component {
  render() {
   
  }
}

function App() {
  return (
    <>
      <Router>
     
        <nav class="navbar bg-body-tertiary fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav" id="barrita">
                  <li class="nav-item">
                    <a class="nav-link" href="/inicio">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/productos">Productos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contacto">Contacto</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/acerca">Acerca de</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>


        <Routes>
          <Route path='/' Component={Inicio} >
          </Route>
          <Route path='/inicio' Component={Inicio} >
          </Route>
          <Route path='/contacto' Component={Contacto} >
          </Route>
          <Route path='/productos' Component={Productos} >
          </Route>
          <Route path='/acerca' Component={Acerca} >
          </Route>
          <Route path='/about' Component={About} >
          </Route>
        </Routes>
      </Router>

      <footer class="bd-footer py-4 py-md-5 mt-5 bg-body-black" id="colorfooter">
        <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div class="row">
            <div class="col-lg-3 mb-3">
              <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>  <span class="fs-5">    MiZappa</span>
              </a>
            </div>
            <div class="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Inicio</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="/inicio">INICIO</a></li>
              
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Lista de productos</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="/productos">PRODUCTOS</a></li>
               
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Contactanos</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="/contacto">CONTACTO</a></li>
               
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3">
              <h5>Nosotros</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="/acerca">ACERCA DE NOSOTROS</a></li>
                
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
