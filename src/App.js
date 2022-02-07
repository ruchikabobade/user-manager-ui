
import './App.css';
import React from "react";
import Login from "./pages/login/login";
import {Route, Routes} from "react-router";
import User from "./pages/user/user";
import AddUser from "./pages/addUser/AddUser";
import UpdatePassword from "./pages/PasswordUpdate/UpdatePassword";
import {BrowserRouter} from "react-router-dom";
import {UserContextProvider} from "./context/UserContext";

function App() {
  return (
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<User />} />
            <Route path="/users/add-user" element={<AddUser />} />
            <Route path="/update-password/:id" element={<UpdatePassword/>} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
  )
}

export default App;
