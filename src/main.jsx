import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Core & Modular Styles
import './styles/main.css';
import './styles/editorial.css';
import './styles/hero.css';
import './styles/viewer360.css';
import './styles/pillars.css';
import './styles/counter.css';
import './styles/gallery.css';
import './styles/team.css';
import './styles/dock.css';
import './styles/deliverables.css';
import './styles/pages.css';
import './styles/admin.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
