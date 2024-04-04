
import './App.css';
import HomePage from './Pages/HomePage';
import LogInpage from './Pages/LogInpage';



function App() {
  const loggedinuser = "shreya"

  return (
    <div className="App">
      loggedinuser?
      <HomePage /> : <LogInpage />


    </div>
  );
}

export default App;
