
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

// require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 import React, { Component } from 'react';
 import ReactDOM from 'react-dom';
 import {BrowserRouter, Route, NavLink} from 'react-router-dom';

 //layout
 import {Aside,Header,Footer,Sidebar,Template} from './components/layout';

 //content
import {ListPengguna} from './components/pengguna';

 export default class App extends Component {
     render() {
         return (
             <BrowserRouter>
                <div>
                   <Aside />
                   <Sidebar/>
                   <Header/>
                   <main id="main-container">
                    <Route exact path="/" component={Template}/>
                    <Route exact path="/manajemen-pengguna" component={ListPengguna}/>
                   </main>
                   <Footer/>
                </div>
             </BrowserRouter>
         );
     }
 }

 ReactDOM.render(<App />, document.getElementById('page-container'));
