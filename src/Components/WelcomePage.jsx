import React from "react";

export default function WelcomePage() {

    return (
        <section className="welcome-page">
            <header>
                <h1>Harry Potter and the React App of Enumeration</h1>
                <img
                className="main-img"
                src={require('../images/expecto.jpg')}
                alt="harry potter casting expecto patronum"
                />
            </header>
            <div className="about-ryan">
                <h3>This page was created with love and magic, by Ryan Renteria, Wizard of the Dark Arts, House Slytherin.</h3>
                <h4>About Ryan</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque quos, error alias dolore rem quo magni id in provident culpa dolores debitis hic, consequatur magnam delectus. Incidunt, quidem voluptatem?</p>
            </div>
        </section>
    )
}