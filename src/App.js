import Posts from './components/Posts';
import Postform from './components/Postform';
import store from './store.js'
import './App.css';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to my posts
        </p>
       </header>
       <Postform />
       <Posts />
      
    </div>
    </Provider>
  );
}

export default App;
