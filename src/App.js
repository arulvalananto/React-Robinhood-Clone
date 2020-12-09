import './App.css';
import Header from './Components/Header/Header';
import NewsFeed from './Components/NewsFeed/NewsFeed';
import Stats from './Components/Stats/Stats';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
