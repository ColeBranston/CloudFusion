import Navbar from "../NewNavbar";
import { HiArrowSmallLeft } from "react-icons/hi2";

//Importing neccesary libraries
import './card.css';
import {useEffect, useState} from 'react';
import Card from './card'

const TeamsPage = ({returnHome}) => {
    //Defining the api key 
    const API_URL = ""

    //Assigning the changing variables with their corresponding functions
    const [people, setPeople] = useState([
        {Poster: "N/A", Name: "Jack Branston"}, 
        {Poster: "N/A", Name: "Cole Branston"}, 
        {Poster: "N/A", Name: "Obaid"}, 
        {Poster: "N/A", Name: "Ganesh"},
        {Poster: "N/A", Name: "Rad"},
        {Poster: "N/A", Name: "Shivam"}, 
        {Poster: "N/A", Name: "Ade"}, 
        {Poster: "N/A", Name: "Joann"}, 
    
    ]);

    const [filteredPeople, setFilteredPeople] = useState([]);


    //For the filter option
    const filterPeople = async (person) => {
        const response = await fetch(`${API_URL}&s=${person}`)
        const data = await response.json();

        //Sending the data to the application
        setPeople(data.Search);
    }

    // // For API Call
    // useEffect ( async() =>{
    //     const response = await fetch(`${API_URL}`)
    //     const data = await response.json();

    //     setPeople(data.Search) //For the API
    // }, [])
    return(
        
                <div className="flex">
                    <div className=" w-[25%] bg-white">
                        <div className="ml-[12.5%] mt-[5%] rounded-xl justify-center w-3/4 bg-gray-300">
                            <div className="flex justify-center mb-12">
                                <button className=" w-1/2 mt-[5%]" onClick={returnHome}> Return Home</button>
                            </div>
                            <div>
                                <div className="flex justify-center mt-3"> 
                                    <input type="checkbox" className="size-6"></input>
                                    <p className="ml-5">This is a filter</p>
                                </div>
                                <div className="flex justify-center mt-3"> 
                                    <input type="checkbox" className="size-6"></input>
                                    <p className="ml-5">This is a filter</p>
                                </div>
                                <div className="flex justify-center mt-3"> 
                                    <input type="checkbox" className="size-6"></input>
                                    <p className="ml-5">This is a filter</p>
                                </div>
                                <div className="flex justify-center mt-3"> 
                                    <input type="checkbox" className="size-6"></input>
                                    <p className="ml-5">This is a filter</p>
                                </div>
                                <div className="flex justify-center mt-3"> 
                                    <input type="checkbox" className="size-6"></input>
                                    <p className="ml-5">This is a filter</p>
                                </div>
                                <div className="flex justify-center mt-3"> 
                                    <input type="checkbox" className="size-6"></input>
                                    <p className="ml-5">This is a filter</p>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
            
                    {people?.length > 0 ? (
                        <div className='overflow-hidden h-screen w-[75%]  bg-white flex justify-center items-center flex-wrap'>
                            {people.map((person) => (
                            <Card person={person} />
                        ))}
                        </div>
                        ):(

                            <div className='empty'>
                                <h2>No People found</h2>
                            </div>

                    )}
                </div>
        
        

    );
}
export default TeamsPage;