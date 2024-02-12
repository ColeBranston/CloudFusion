import {React, useState} from 'react'
import HomePage from './Pages/HomePage/HomePage';
import TeamsPage from "./Pages/TeamsPage/TeamsPage";
import SignInPage from "./Pages/SignInPage/SignIn";
import Settings from "./Pages/SettingsPage/Settings"

import { StripeProvider } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// changing this to your publishable key
const stripePromise = loadStripe('your_publishable_key');

// function App() {
//   const [page, setPage] = useState("Homepage")
//   const returnHome = () => {
//     setPage("Homepage")
//     console.log("Homepage")
//   };
//   const goTeamsPage = () => {
//     setPage("Teams")
    
//   };
//   const goSignInPage = () => {
//     setPage("SignIn")
    
//   };
//   var register = () =>{
//     setPage('Register')
//   }
//   var settings = () => {
//     setPage("Settings")
//   }
// 
{/* <HomePage links = {goTeamsPage} */}
//   return (

//     <div className="App">
//       {page === "Homepage"? <HomePage links1 = {goTeamsPage} links2 = {goSignInPage} links3={settings}/>:
//        page==="Teams"? <TeamsPage returnHome = {returnHome}/>: 
//        page=="SignIn"? <SignInPage returnHome={returnHome}/>: <Settings returnHome={returnHome}/>}

//         {/* {page === "Homepage" && <HomePage links1={goTeamsPage} links2={goSignInPage} links3={settings} />}
//         {page === "Teams" && <TeamsPage returnHome={returnHome} />}
//         {page === "SignIn" && <SignInPage returnHome={returnHome} />}
//         {page === "Settings" && <Settings returnHome={returnHome} />} */}
//     </div>
    
    
//   );
// }


function App() {
  return (
    <StripeProvider stripe={stripePromise}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/settings" element={<Settings />} />
          {/* <Route path="/payment" element={<Payment />} />
          <Route path="/completion" element={<Completion />} /> */}
          {/* Include other routes as needed */}
        </Routes>
      </BrowserRouter>
    </StripeProvider>
  );
}

export default App;
