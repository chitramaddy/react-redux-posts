import Posts from './components/Posts';
import Postform from './components/Postform';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to my posts
        </p>
       </header>
       <Postform />
       <Posts />
      
    </div>
  );
}

export default App;
