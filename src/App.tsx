import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { LoginPage } from './pages/LoginPage/LoginPage';

function App(): React.JSX.Element {
  // const [count, setCount] = useState(0);

  const isAuthenticated = false;

  return (
    <>
      <Header />

      <main>
        {isAuthenticated ? (
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="catalog" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="sign-up" element={<RegisterPage />} />
            <Route path="log-in" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </main>

      <button type="button">press me</button>

      <Footer />
    </>
  );
}

export default App;
