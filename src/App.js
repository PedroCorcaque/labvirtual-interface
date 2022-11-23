import './App.css';
import { Container } from './components/container';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

const make_request = () => {
  try {
    fetch("http://localhost:5818/run_read_serial")
    .then((response) => console.log(response));
  } catch (err) {
    console.log("Erro:", err);
  }
}

function App() {
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
      <Footer>algo</Footer>
    </Container>
  );
}

export default App;
