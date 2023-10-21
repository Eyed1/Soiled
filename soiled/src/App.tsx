import { DirtForm } from "./components/DirtForm";
import "./App.css";
import farm from "./farm.jpeg";


function App() {
  return (
    <div>
      <h1>Soil!!!!!</h1>
      <img className = "farm-image" src={farm} alt="My Image" />
      <DirtForm />
    </div>
  );
}

export default App;
