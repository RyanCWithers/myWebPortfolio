import './App.css';
import AdminPage from '/views/AdminPage';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <AdminPage />
      </Router>
    </div>
  );
}

export default App;
