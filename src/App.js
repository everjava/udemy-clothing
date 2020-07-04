import React from 'react';
import './App.css';
import {hot} from 'react-hot-loader'
import { Homepage } from './pages/homepage.component';

function App() {
  return (
    <div  >
    <Homepage></Homepage>
    </div>
  );
}

export default hot(module)(App);
