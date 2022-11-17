import './App.css';

API_URL = process.env.REACT_APP_API_URL;

const make_request = () => {
  try {
    fetch(API_URL+"/run_read_serial")
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
