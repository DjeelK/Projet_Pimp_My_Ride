import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { isUserLoggedIn } from './services/AuthService';
import HomePageRoute from './routes/HomePageRoute';
import SignInPageRoute from './routes/SignInPageRoute';
import SignUpPageRoute from './routes/SignUpPageRoute';
import ApplicationPageRoute from './routes/ApplicationPageRoute';
import CovoituragePageRoute from './routes/CovoituragePageRoute';
import ProfilPageRoute from './routes/ProfilPageRoute';
import TripPageRoute from './routes/TripPageRoute';
import MesTrajetsPageRoute from './routes/MesTrajetsPageRoute';

function App() {
  function AuthenticatedRoute({ children }) {
    const isAuth = isUserLoggedIn();

    if (isAuth) {
      return children;
    }

    return <Navigate to="/" />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPageRoute />} />
          <Route
            path="/login"
            element={
              <Navigate to="/login" />
            }
          />
          <Route path="/register" element={<SignUpPageRoute />} />

          <Route
            path="/"
            element={
                <HomePageRoute />
            }
          />

          <Route
            path="/application"
            element={
                <ApplicationPageRoute />
            }
          />

          <Route
            path="/covoiturage"
            element={
                <CovoituragePageRoute />
            }
          />

          <Route
            path="/profil"
            element={
              <AuthenticatedRoute>
                <ProfilPageRoute />
              </AuthenticatedRoute>
            }
          />

          <Route
            path="/addTrajet"
            element={
              <AuthenticatedRoute>
                <TripPageRoute />
              </AuthenticatedRoute>
            }
          />

          <Route
            path="/mesTrajets"
            element={
              <AuthenticatedRoute>
                <MesTrajetsPageRoute />
              </AuthenticatedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
