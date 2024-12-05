import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginForm from './components/LoginForm'; // Ruta del archivo LoginForm.tsx

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>
);


