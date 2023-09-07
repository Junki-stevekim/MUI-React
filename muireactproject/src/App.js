
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

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
      <br />
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Create</Button>
      <Button>Update</Button>
    </ButtonGroup>
    <Button variant="contained"> Delete</Button>
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
