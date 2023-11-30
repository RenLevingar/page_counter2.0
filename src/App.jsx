import './App.css';
import PageViewCounter from './components/PageViewCounter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* renders the page view counter from the componet of the same name */}
        <PageViewCounter/>
      </header>
    </div>
  );
}

export default App;
