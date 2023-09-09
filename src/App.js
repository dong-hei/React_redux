import logo from './logo.svg';
import './App.css';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className="container">
      <h1>최초 화면</h1>
      <Top />
      <Bottom />
    </div>
  );
}

export default App;
