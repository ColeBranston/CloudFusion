import "./card.css";
//Initializing the person card component
const Card =({person}) => {
    console.log(person.id)
    return (
        <div className="person bg-gray-300 lg:w-[32.5%] lg:h-1/3 md:w-[60%] md:h-1/2 w-[70%] h-1/3 mx-auto m-[1.5rem] md:m-[1.5rem] lg:m-[1.5rem] " style={{animation: `appear ${person.id}s`}}>
            <div className="flex items-center justify-center h-[75%]">
                {/* Defining the image on the card */}
                {/* <img className="h-full w-[60%]" src={person.Poster !== "N/A" ? person.Poster: 'https://via.placeholder.com/400'} alt={person.Title}/>
             */}
            </div>
            <div className="bg-gray-100 h-[25%]">
                <h2 className="mx-auto color-black text-[2vw]">{person.Name}</h2>
            </div>
        </div>
    );
}

//Exporting the component
export default Card;