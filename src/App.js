import './App.css';

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
    <button type="button" onClick={() => make_request()}>
      { "Texto" }
    </button>
  );
}

export default App;
