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
import SignUp from './component/SignUp';
import Calculator from './12/Calculator';
import FancyBorder from './component/FancyBorder';
import WelcomeDialog from './component/WelcomDialog';
import WelcomeDialog2 from './component/Dialog';
import ProfileCard from './component/ProfileCard';
import ThemeContext from './context/ThemeContext';
import DarkOrLight from './context/DarkOrLight';
import MainPage1 from './css/MainPage1';
import Sample from './css/Sample';
import Blocks from './css/Blocks';
import Weather from './etc/Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
