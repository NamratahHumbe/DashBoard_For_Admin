import './App.css'
import Sidebar from './components/Sidebar';
import MainDash from './components/MainDash';
import RightSide from './components/RightSide';
function App() {
  return (
    <div className="App">
        <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
        </div>
    </div>
  );
}

export default App;
