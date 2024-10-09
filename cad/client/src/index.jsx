import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
