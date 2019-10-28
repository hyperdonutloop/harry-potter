import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

export default function CharacterList() {

    const [character, setCharacter] = useState([]);

    useEffect(()=> {
        axios.get(`https://www.potterapi.com/v1/characters/`, {
            params: {
                key: "$2a$10$XtkLTBEQ40m9XwJ091SITuonnR5MtR8AihrFyMF03EcSsqnMa2Fe." 
            }
        })
        .then(response => {
            console.log(response.data);
            setCharacter(response.data)
        })
        .catch (error => {
            console.log("data not returned", error);
            
        })


    }, []);

    return (

        <section className="character-list">
        {character.map((character, index) => {
            return (
                <CharacterCard 
                    key={character._id}
                    name={character.name}
                    role={character.role}
                    species={character.species}
                    house={character.house}
                    school={character.school}
                />
            )
        })}
        </section>
    )


}
