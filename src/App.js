import {React, useState} from 'react'
import HomePage from './Pages/HomePage/HomePage';
import TeamsPage from "./Pages/TeamsPage/TeamsPage";
import SignInPage from "./Pages/SignInPage/SignIn";
import Settings from "./Pages/SettingsPage/Settings"

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
  var register = () =>{
    setPage('Register')
  }
  var settings = () => {
    setPage("Settings")
  }

{/* <HomePage links = {goTeamsPage} */}
  return (
    <div className="App">
      {page === "Homepage"? <HomePage links1 = {goTeamsPage} links2 = {goSignInPage} links3={settings}/>: page==="Teams"? <TeamsPage returnHome = {returnHome}/>: page=="SignIn"? <SignInPage returnHome={returnHome}/>: <Settings returnHome={returnHome}/>}

    </div>
  );
}

export default App;
