import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import Error from './components/error';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
