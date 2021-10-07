
import './App.css';
import Benner from './Components/Banner/Benner';
import Header from './Components/Header/Header';
import TopBar from './Components/Topbar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Header></Header>
      <Benner></Benner>
    </div>
  );
}

export default App;
