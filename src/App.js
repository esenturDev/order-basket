import './App.css';
import { Expenses } from './Components/Expenses/Expenses';
import { Header } from './Components/header/Header';
import { Main } from './Components/main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Expenses/>
      <Main/>
    </div>
  );
}

export default App;
