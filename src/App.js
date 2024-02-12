import {React, useState} from 'react'
import HomePage from './Pages/HomePage/HomePage';
import TeamsPage from "./Pages/TeamsPage/TeamsPage";
import SignInPage from "./Pages/SignInPage/SignIn";
import Settings from "./Pages/SettingsPage/Settings"
import Payment from "./Pages/StripePage/Payment";
import CheckoutForm from "./Pages/StripePage/CheckoutForm"; 
import CompletionPage from "./Pages/StripePage/Completion"; 

function App() {
  const [page, setPage] = useState("Homepage")
  const returnHome = () => {
    setPage("Homepage")
    console.log("Homepage")
  };
  const goTeamsPage = () => {
    setPage("Teams")
    
  };
  const goSignInPage = () => {
    setPage("SignIn")
    
  };
  
  const goPayment = () => setPage("Payment"); // Add a function to go to the payment page

  var register = () =>{
    setPage('Register')
  }
  var settings = () => {
    setPage("Settings")
  }
{/* <HomePage links = {goTeamsPage} */}
  return (
    // <div className="App">
    //   {page === "Homepage"? <HomePage links1 = {goTeamsPage} links2 = {goSignInPage} links3={settings}/>: page==="Teams"? <TeamsPage returnHome = {returnHome}/>: page=="SignIn"? <SignInPage returnHome={returnHome}/>: <Settings returnHome={returnHome}/>}

    // </div>

    <div className="App">
    {page === "Homepage" && <HomePage links1={goTeamsPage} links2={goSignInPage} links3={settings} />}
    {page === "Teams" && <TeamsPage returnHome={returnHome} />}
    {page === "SignIn" && <SignInPage returnHome={returnHome} />}
    {page === "Settings" && <Settings returnHome={returnHome} />}
    {page === "Payment" && <Payment />} // Add a conditional render for Payment
    {page === "Checkout" && <CheckoutForm />} // Add a conditional render for CheckoutForm
    {page === "Completion" && <CompletionPage />} // Add a conditional render for CompletionPage
    {/* Continue with conditional rendering for other pages */}
  </div>
  );
}

export default App;