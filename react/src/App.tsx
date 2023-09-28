import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyles';
import { Home } from './app/presentation/pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
