import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Loader from './Loader';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from 'react-cookie';
import NotFoundPage from './NotFoundPage';

function checkCookies() {
  return parseInt(document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=')
    return parts[0] === "tableID" ? decodeURIComponent(parts[1]) : r
  }, ''))
}

const ProtectedRoute = ({ user, children }: any) => {
  if (!user) {
    return <Navigate to="/404" replace />;
  }

  return children ? children : <App />;
};

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/table/:id" element={<Loader />} />
          <Route path="/" element={<ProtectedRoute user={checkCookies()}></ProtectedRoute>} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route
            path="*"
            element={<Navigate to="/404" replace />}
          />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
