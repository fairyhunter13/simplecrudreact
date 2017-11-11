
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 import React, { Component } from 'react';
 import ReactDOM from 'react-dom';
 import {BrowserRouter, Route, NavLink} from 'react-router-dom';
 import Header from './components/layout/Header';
 import Sidebar from './components/layout/Sidebar';
 import Footer from './components/layout/Footer';

 class App extends Component {
     render() {
         return (
             <BrowserRouter>
                <div>
                 <Sidebar/>
                 <Header/>

                 <Footer/>
                </div>
             </BrowserRouter>
         );
     }
 }
 export default App;

 ReactDOM.render(<App />, document.getElementById('page-container'));
