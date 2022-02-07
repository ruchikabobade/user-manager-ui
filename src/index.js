import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from "react-router";
import User from "./pages/user/user";
import UpdatePassword from "./pages/PasswordUpdate/UpdatePassword";
import AddUser from "./pages/addUser/AddUser";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/users" element={<User />} />
              <Route path="/users/add-user" element={<AddUser />} />
              <Route path="/update-password" element={<UpdatePassword/>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
