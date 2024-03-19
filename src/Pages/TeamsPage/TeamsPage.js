
import { HiArrowSmallLeft } from "react-icons/hi2";

//Importing neccesary libraries
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';


import './card.css';
import Card from './card';
import Navbar from '../HomePage/Navbar.jsx';

let stripePromise;
const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;


const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(publishableKey);
    }

    return stripePromise;
}

const TeamsPage = () => {

    // //Defining the api key //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     const API_URL = ""


    // const stripePromise = loadStripe(publishableKey);

    // // This function should be called when the user clicks a "Checkout" button
    // const handlePurchaseClick = async () => {
    //     try {
    //       const response = await fetch('http://localhost:3000/create-checkout-session', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({}),
    //       });

    //       if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //       }

    //       const data = await response.json(); // Assuming the server responds with JSON
    //       const sessionId = data.sessionId; // Make sure this matches what the server sends

    //       if (sessionId) {
    //         const stripe = await stripePromise;
    //         const { error } = await stripe.redirectToCheckout({
    //           sessionId, // Use the session ID from the server response
    //         });

    //         if (error) {
    //           console.error('Error redirecting to Stripe checkout:', error);
    //         }
    //       } else {
    //         console.error('Session ID not received from server');
    //       }
    //     } catch (error) {
    //       console.error('Error during fetch to server:', error.message);
    //     }
    //   };

    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    // const item = {
    //     price_data: {
    //         currency: 'usd',
    //         product_data: {
    //             name: 'Your Product Name',
    //         },
    //         unit_amount: 1000,
    //     },
    //     quantity: 1,
    // };

    const checkoutOptions = {
        lineItems: [
            {
                price: 'price_1OmnZ3IJzkf04pjLb9FMWZrZ', // replace 'price_id' with the actual price ID from your Stripe Dashboard
                quantity: 1,
            },
        ],
        mode: "payment",
        successUrl: `${window.location.origin}/completion`,
        cancelUrl: `${window.location.origin}/` // work on this later after checkout is working
    };

    const handlePurchaseClick = async () => {
        setLoading(true);
        console.log("redirectToCheckout");

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error);

        if (error) setStripeError(error.message);
        setLoading(false);
    };

    if (stripeError) alert(stripeError);


    const [chosen, setChosen] = useState("N/A");
    //Assigning the changing variables with their corresponding functions
    const [people, setPeople] = useState([
        { Poster: "N/A", Name: "Jack Branston", id: 1, Description: "Hi my name is Jack Branston. I'm a hard working student from Western", Skills: ['Hard working', 'Collaborative', 'Creative', 'Innovative', 'Leader'] },
        { Poster: "N/A", Name: "Cole Branston", id: 1, Description: "Hi my name is Cole Branston. I'm a hard working student from Western", Skills: ['Hard working', 'Collaborative', 'Creative', 'Innovative', 'Leader'] },
        { Poster: "N/A", Name: "Obaid", id: 2, Description: "Hi my name is Obaid. I'm a hard working student from Western", Skills: ['Hard working', 'Collaborative', 'Creative', 'Innovative', 'Leader'] },
        { Poster: "N/A", Name: "Ganesh", id: 2, Description: "Hi my name is Ganesh. I'm a hard working student from Western", Skills: ['Hard working', 'Collaborative', 'Creative', 'Innovative', 'Leader'] },
        { Poster: "N/A", Name: "Rad", id: 3, Description: "Hi my name is Rad. I never show up", Skills: ['Hard working', 'Collaborative', 'Creative', 'Innovative', 'Leader'] },
        { Poster: "N/A", Name: "Shivam", id: 3, Description: "Hi my name is Shivam. I'm a hard working student from Western", Skills: ['Hard working', 'Collaborative', 'Creative', 'Innovative', 'Leader'] },
        { Poster: "N/A", Name: "Ade", id: 4, Description: "Hi my name is Ade. I'm a hard working student from Western", Skills: ['Hard working', 'Collaborative', 'Creative', 'Innovative', 'Leader'] },
        { Poster: "N/A", Name: "Joann", id: 4, Description: "Hi my name is Joann. I'm a hard working student from Western", Skills: ['Hard working', 'Collaborative', 'Creative', 'Innovative', 'Leader'] }

    ]);

    const [filteredPeople, setFilteredPeople] = useState([]);


    //For the filter option
    // const filterPeople = async (person) => {
    //     const response = await fetch(`${API_URL}&s=${person}`)
    //     const data = await response.json();

    //     //Sending the data to the application
    //     setPeople(data.Search);
    // }

    // // For API Call //Uncomment this when you connect the API
    // useEffect ( async() =>{
    //     const response = await fetch(`${API_URL}`)
    //     const data = await response.json();

    //     setPeople(data.Search) //For the API
    // }, [])

    const reveal = (person) => {
        setChosen(person)
    }

    return (
        <>
        <Navbar />
        <div className="flex bg-white overflow-auto z-0">

            {chosen != "N/A" ? (
                <div className="flex h-screen w-full overflow-scroll">
                    <div className="w-1/4 bg-[#F2F2F2]">
                        <button className="flex text-center  mt-[20%] mx-auto" onClick={() => setChosen("N/A")}><HiArrowSmallLeft className="w-[1.75vw] h-[100%] my-auto" /><span className="ml-[5%] text-[1.5vw]">Return</span></button>
                    </div>
                    <div className="w-[75%] text-center flex-col overflow-y-scroll">
                        <div className=" h-[50%] w-[80%] mx-auto">
                            {/* Defining the image on the card */}
                            {/* <img className="h-full w-[60%]" src={person.Poster !== "N/A" ? person.Poster: 'https://via.placeholder.com/400'} alt={person.Title}/>
             */}
                        </div>
                        
                            <div className="bg-gray-300 text-left rounded-xl mx-auto w-[80%] h-[40%] animate-[flyFromBottom_1s]">
                                <div className="ml-[10%] mr-[10%] mb-[10%]">
                                    <h2 className="mt-[2%] text-[35px] text-center pt-2">{chosen.Name}</h2>
                                    <h3 className="ml-[10%] text-[20px] ">Description</h3>
                                    <p className="ml-[10%]">{chosen.Description}</p>
                                    <h3 className="ml-[10%] text-[20px] mt-[5%]">Skills</h3>

                                    <ul className="ml-[11.5%] list-disc">
                                        <li>{chosen.Skills[0]}</li>
                                        <li>{chosen.Skills[1]}</li>
                                        <li>{chosen.Skills[2]}</li>
                                        <li>{chosen.Skills[3]}</li>
                                        <li>{chosen.Skills[4]}</li>
                                    </ul>
                                    <div className="w-full flex">
                                        <button disabled={isLoading} onClick={handlePurchaseClick} className="flex p-4 bg-gray-400 justify-center items-center rounded-md m-10 mx-auto hover:animate-pulse text-[20px]">Purchase Services</button>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>

            ) : (
                <div className="w-screen flex h-screen">
                    <div className="flex w-[25%] h-screen bg-gray-100 animate-[flyFromLeft_1s]">
                        <div className=" mx-auto rounded-xl justify-center w-3/4 bg-[#F2F2F2] opacity-[0.7]">
                            <h2 className="text-[1.75vw] py-10">Filters</h2>
                            <div>
                                <div className="">
                                    <div className="flex justify-left">
                                        <input type="checkbox" className="size-[1.5vw] my-auto"></input>
                                        <p className="ml-5 justify-left text-[1.3vw]">Jack Branston</p>
                                    </div>
                                    <div className="flex justify-left">
                                        <input type="checkbox" className="size-[1.5vw] my-auto"></input>
                                        <p className="ml-5 text-[1.3vw]">Cole Branston</p>
                                    </div>
                                    <div className="flex justify-left">
                                        <input type="checkbox" className="size-[1.5vw] my-auto"></input>
                                        <p className="ml-5 text-[1.3vw]">Obaid</p>
                                    </div>
                                    <div className="flex justify-left">
                                        <input type="checkbox" className="size-[1.5vw] my-auto"></input>
                                        <p className="ml-5 text-[1.3vw]">Ganesh</p>
                                    </div>
                                    <div className="flex justify-left">
                                        <input type="checkbox" className="size-[1.5vw] my-auto"></input>
                                        <p className="ml-5 text-[1.3vw]">Rad</p>
                                    </div>
                                    <div className="flex justify-left">
                                        <input type="checkbox" className="size-[1.5vw] my-auto"></input>
                                        <p className="ml-5 text-[1.3vw]">Shivam</p>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>

                    {people?.length > 0 ? (
                        
                            <div className="overflow-y-scroll py-10">
                                <div className='flex h-full w-full justify-center flex-wrap bg-white p-20'>

                                    {people.map((person) => (
                                        <Card person={person} reveal={reveal} />
                                    ))}
                                </div>
                            </div>
    
                    ) : (

                        <div className='empty'>
                            <h2>No People found</h2>
                        </div>



                    )}
                </div>

            )}

        </div>
    </>

    );
}
export default TeamsPage;
