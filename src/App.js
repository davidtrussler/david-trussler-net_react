import React from 'react';
import './App.scss';
import {Header} from './components/Header'; 
import {Main} from './components/Main'; 
import {Footer} from './components/Footer'; 

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer 
      	urls = {['https://www.linkedin.com/in/dtrussler/', 'https://github.com/davidtrussler']}
      	links = {['LinkedIn', 'GitHub']}
      />
    </React.Fragment>
  );
}

export default App;
