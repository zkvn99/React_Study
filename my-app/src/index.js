import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './book/Library'
import Clock from './clock/Clock';
import CommentList from './comment/CommentList';
import NotificationList from './notification/NotificationList';
import Counter from './counter/Counter';
import UseRef from './use/UseRef';
import Accomodate from './use/Accomodate';
import ConfirmButton from './confirm/ConfirmButton';
import ConfirmButtonFunc from './confirm/ConfirmButtonFunc';
import LoginControl from './element/Login';
import MainPage from './element/WarningBanner';
import LandingPage from './element/LandingPage';
import Blog from './element/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Blog />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
