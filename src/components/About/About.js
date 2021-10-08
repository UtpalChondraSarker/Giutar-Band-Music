import React from 'react';
import img from '../../image/guitar.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <h2 className='mt-5 text-warning about-container'>About me!</h2>

            <div className='d-flex m-5 container'>

                <div row='6'>
                    <img className='' src={img} alt="" />
                </div>
                <div row='6'>
                    <h1 className='fw-bolder'>Welcome to Guitar Band!</h1>
                    <p className='m-5 lh-lg  about '>Guitar Band Music School offers comprehensive guitar lessons that start with the fundamentals, including scales, chords, tuning, arpeggios, and rhythm adapted to various skill levels.

                        Our core philosophy is that the best way for students to gain musical proficiency is through performance-based music education. All of our lessons for guitar students include a performance aspect.</p>

                    <button className='bg-danger rounded border border-info button'>READ MORE</button>
                </div>
            </div>
        </div>

    );
};

export default About;