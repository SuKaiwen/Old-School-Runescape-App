import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App text-white" style={{backgroundColor:"#0f1626"}}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
