import React from "react";

export default function CharacterCard(props) {

    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Role: {props.role}</p>
            <p>Species: {props.species}</p>
            <p>House: {props.house}</p>
            <p>School: {props.school}</p>
        </div>
    )
}