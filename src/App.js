import {React, useState} from 'react'
import HomePage from './Pages/HomePage/HomePage';
import TeamsPage from "./Pages/TeamsPage/TeamsPage";
import SignInPage from "./Pages/SignInPage/SignIn";
import Settings from "./Pages/SettingsPage/Settings"

import Payment from "./Pages/StripePage/Payment";
import CheckoutForm from "./Pages/StripePage/CheckoutForm"; 
import CompletionPage from "./Pages/StripePage/Completion"; 
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/completion" element={<CompletionPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;