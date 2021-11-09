import './App.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Routing, Linking } from './Routing';
import { createContext, useState } from 'react';



const LoginUSer = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const user = {login: login, setLogin: () => {setLogin(!login)}};
  return (
    <div className="App">
      <Navbar bg="light" variant="light" style={{display: "flex", position: "sticky", zIndex: '100', top: '0'}}>
        <Container>
          <Nav className="me-auto">
            <Linking />
          </Nav>
          <input style={{borderRadius: "25px", outlineWidth: '0', marginRight: "800px", padding: '8px', margin: "10px"}} />
          <Button style={{marginLeft: "60px"}} variant="dark" size='lg' onClick={user.setLogin}>{user.login? "Logout":"Login"}</Button>
        </Container>
      </Navbar>
      <LoginUSer.Provider value={user}>
        <Routing />
      </LoginUSer.Provider>
    </div>
  );
}

export default App;
export {LoginUSer};

