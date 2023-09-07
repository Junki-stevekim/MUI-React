
import './App.css';

import React from 'react'

function Header () {
  return (
    <header>
      <h1>Welcome</h1>
    </header>   
  );
}

function Nav(){
  return(
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>

  );
} 

function Article(){
  return(
    <article>
      <h1>Welcome</h1>
      <h2>Web Universe</h2>
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
