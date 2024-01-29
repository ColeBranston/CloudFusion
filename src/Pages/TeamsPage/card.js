import "./card.css";
//Initializing the person card component
const Card =({person}) => {
    return (
        <div className='person bg-gray-300'>
            <div className="flex items-center justify-center h-[75%]">
                {/* Defining the image on the card */}
                {/* <img className="h-full w-[60%]" src={person.Poster !== "N/A" ? person.Poster: 'https://via.placeholder.com/400'} alt={person.Title}/>
             */}
            </div>
            <div className="flex bg-gray-100">
                <h2 className="mx-auto my-[7%] color-black">{person.Name}</h2>
            </div>
        </div>
    );
}

//Exporting the component
export default Card;