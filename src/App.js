import {React, useState} from 'react'
import HomePage from './Pages/HomePage/HomePage';
import TeamsPage from "./Pages/TeamsPage/TeamsPage";

function App() {
  const [page, setPage] = useState("Homepage")
  const returnHome = () => {
    setPage("Homepage")
    console.log("Homepage")
  };
  const goTeamsPage = () => {
    setPage("Teams")
    
  };
{/* <HomePage links = {goTeamsPage} */}
  return (
    <div className="App">
      {page === "Homepage"? <HomePage links = {goTeamsPage} />:<TeamsPage returnHome = {returnHome}/>}
    </div>
  );
}

export default App;
