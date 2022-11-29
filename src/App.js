 
import './App.css';

function App() {
  const handldeSubmit =()=>{
    console.log("clicked");
  }
  return (
    <div className="App">
      <button onClick={handldeSubmit}>submit</button>
    </div>
  );
}

export default App;
