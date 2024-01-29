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
                    <div className=" w-[25%] bg-gray-100">
                        <div onClick={returnHome} className="hover:cursor-pointer flex ml-[25%] items-center bg-[#F2F2F2] rounded-md w-1/2 mt-[20%]">
                                <button className="flex rounded-md mt-[5%] mb-[5%] mx-auto"><HiArrowSmallLeft className="w-[100%] h-[100%] my-auto"/><span className="ml-[5%]">Back</span></button>
                        </div>

                        <div className="position-fixed ml-[12.5%] mt-[30%] rounded-xl justify-center w-3/4 bg-[#F2F2F2] opacity-[0.7]">
                            <h2>Filters</h2>
                            <div>
                                <div className="flex justify-center pt-4"> 
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
                        <div className='overflow-hidden h-screen w-[75%] flex justify-center items-center flex-wrap bg-white'>
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