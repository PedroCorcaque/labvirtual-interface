import './App.css';
import { useState } from "react";
import { Container, Header, Main, Footer } from './components/styles';

function App() {

  const [response, setResponse] = useState("");

  const make_request = () => {
    try {
      fetch("http://localhost:5818/run_read_serial")
      .then((res) => setResponse(res));
    } catch (err) {
      console.log("Erro:", err);
    }
  }

  return (
    <Container>
      <Header>
        Laboratório Virtual
      </Header>
      <Main>
        <h3>Clique no botão abaixo para iniciar a obtenção dos dados</h3>
        <h4>Note que o monitor serial do arduino deve estar fechado!</h4>
        <button type="button" onClick={() => make_request()}>
          { "Iniciar" }
        </button>
      </Main>
      <Footer>
        <span style={{ "margin-right": "5vh" }}>
          { `Status: ${response}` }
        </span>
      </Footer>
    </Container>
  );
}

export default App;
