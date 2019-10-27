import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {

    const [data, setData] = useState([]);

    useEffect(()=> {
        axios.get(`https://www.potterapi.com/v1/characters/`, {
            params: {
                key: "$2a$10$XtkLTBEQ40m9XwJ091SITuonnR5MtR8AihrFyMF03EcSsqnMa2Fe." 
            }
        })
        .then(response => {
            console.log(response.data);
            
        })
        .catch (error => {
            console.log("data not returned", error);
            
        })


    })

    return (
        <div>Hey Buttsnack!</div>
    )


}
