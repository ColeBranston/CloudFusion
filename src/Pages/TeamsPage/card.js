import "./card.css";
//Initializing the person card component
const Card =({person, reveal}) => {
    
    return (
        <div onClick={() => reveal(person)} className="person bg-gray-300 lg:w-[32.5%] lg:h-1/3 md:h-1/2 w-[55%] h-1/3 mx-auto m-[1.5rem] md:m-[1.5rem] lg:m-[1.5rem]" style={{animation: `appear ${person.id}s`}}>
            <div className= "flex items-center justify-center h-[75%]">
                <img className="h-full w-auto rounded-full" src={person.Poster !== "N/A" ? person.Poster: ''} alt={person.Title}/>     
            </div>
            <div className="bg-gray-100 h-[25%]">
                <h2 className="pt-5 mx-auto color-black text-[25px] ">{person.Name}</h2>
                <p className="text-[15px]">{person.Speciality}</p>
            </div>
        </div>
    );
}

//Exporting the component
export default Card;