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
        {Poster: "N/A", Name: "Jack Branston", id:1}, 
        {Poster: "N/A", Name: "Cole Branston", id:1}, 
        {Poster: "N/A", Name: "Obaid", id:2}, 
        {Poster: "N/A", Name: "Ganesh", id:2},
        {Poster: "N/A", Name: "Rad", id:3},
        {Poster: "N/A", Name: "Shivam", id:3}, 
        {Poster: "N/A", Name: "Ade", id:4}, 
        {Poster: "N/A", Name: "Joann", id:4}

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
        
                <div className="flex bg-white overflow-auto">
                    <div className="fixed h-screen w-[25%] bg-gray-100 animate-[flyFromLeft_1s_ease-out]">
                        <div onClick={returnHome} className="hover:cursor-pointer flex mx-auto items-center bg-[#F2F2F2] rounded-md w-1/2 mt-[20%]">
                                <button className="flex rounded-md mt-[5%] mb-[5%] mx-auto"><HiArrowSmallLeft className="w-[1.75vw] h-[100%] my-auto"/><span className="ml-[5%] text-[1.5vw]">Back</span></button>
                        </div>
                        <div className=" mx-auto mt-[30%] rounded-xl justify-center w-3/4 bg-[#F2F2F2] opacity-[0.7]">
                            <h2 className="text-[1.75vw]">Filters</h2>
                            <div>
                                <div className="">
                                    <div className="flex justify-left pt-4"> 
                                        <input type="checkbox" className="size-[1.5vw] my-auto"></input>
                                        <p className="ml-5 justify-left text-[1.3vw]">Jack Branston</p>
                                    </div>
                                    <div className="flex justify-left mt-3"> 
                                        <input type="checkbox" className="size-[1.5vw] my-auto"></input>
                                        <p className="ml-5 text-[1.3vw]">Cole Branston</p>
                                    </div>
                                    <div className="flex justify-left mt-3"> 
                                        <input type="checkbox" className="size-[1.5vw] my-auto"></input>
                                        <p className="ml-5 text-[1.3vw]">Obaid</p>
                                    </div>
                                    <div className="flex justify-left mt-3"> 
                                        <input type="checkbox" className="size-[1.5vw] my-auto"></input>
                                        <p className="ml-5 text-[1.3vw]">Ganesh</p>
                                    </div>
                                    <div className="flex justify-left mt-3"> 
                                        <input type="checkbox" className="size-[1.5vw] my-auto"></input>
                                        <p className="ml-5 text-[1.3vw]">Rad</p>
                                    </div>
                                    <div className="flex justify-left mt-3"> 
                                        <input type="checkbox" className="size-[1.5vw] my-auto"></input>
                                        <p className="ml-5 text-[1.3vw]">Shivam</p>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
            
                    {people?.length > 0 ? (
                        <div className='ml-[25%] h-screen w-[75%] justify-center items-center lg:flex-wrap lg:flex md:flex md:flex-wrap bg-white'>
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