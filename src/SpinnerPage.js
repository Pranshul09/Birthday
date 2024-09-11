import React, { useState } from 'react';
import WheelComponent from 'react-wheel-of-prizes'
import One from './One.jpg'
import Two from './Two.jpg'
import Three from './Three.jpg'
import Four from './Four.jpg'
import Five from './Five.jpg'
import Six from './Six.jpg'
import birthday from './bubble.jpg'
// import dancing from './dance.gif'


const SpinnerGameWithImages = () => {
    // Predefined results for each spin
    const predefinedResults = ['Cow soft toy', 'Dust Pan', 'Many Poko Pants'];
    let spin = 2
    let [currentSpin, setCurrentSpin] = useState(2);
    const [results, setResults] = useState([]);
    const [gif, setGif] = useState(false);
    const [canSpin, setCanSpin] = useState(true);
    // Prize segments (with images)
    const segments = [
        { label: 'Piano', image: `${One}` },
        { label: 'Cow soft toy', image: `${Two}` },
        { label: 'Converse Shoes', image: `${Three}` },
        { label: 'Dust Pan', image: `${Four}` },
        { label: 'Sports Bike', image: `${Five}` },
        { label: 'Many Poko Pants', image: `${Six}` },
    ];
    const handleSpin = () => {
        if (spin <= 2) {
            const result = predefinedResults[spin];
            console.log('---->>>', result, spin - 1)
            // Add result to the list of results
            setResults([...results, result]);
            setGif(true)
            spin = spin - 1
            setCurrentSpin(spin);
        }
        // After 3 spins, stop further spins
        if (spin - 1 == -2) {
            setCanSpin(false);
        }
    };
    const myStyle = {
        backgroundImage:
            `url(${birthday})`,
        height: "100%",
        width: '100%',
        backgroundSize: "cover",
        position: "fixed",
        overflow: 'scroll',

        backgroundRepeat: "no-repeat",
    };
    return (
        <div style={myStyle}>
            <h1 style={{ color: 'white', fontWeight: '900', fontSize: '60px', marginLeft: '20%', marginBottom: '-10px' }}>Spin the Wheel and win a gift!</h1>
            <div style={{ marginLeft: '30%' }}>
                <WheelComponent
                    segments={segments.map((segment) => segment.label)}
                    segColors={['#ec407a', '#ce93d8', '#00c853', '#00796b', '#ff8a65', '#0091ea']}
                    onFinished={(winner) => {
                        handleSpin();
                    }}
                    isOnlyOnce={!canSpin} // Only allow 3 spins
                    prizeIndex={segments.findIndex((segment) => segment.label === predefinedResults[spin])}
                    // prizeIndex={segments.findIndex((segment) => segment.label === predefinedResults[spin])}
                    size={250}
                    upDuration={100}
                    downDuration={1000}
                />
            </div>

            {/* Display images for the segments */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: "-250px" , padding:'20px'}}>
                {segments.map((segment, index) => (
                    <div key={index} style={{ textAlign: 'center', margin: '0 10px', color: 'white' }}>
                        <img src={segment.image} alt={segment.label} width="100" height="100"  />
                        <p>{segment.label}</p>
                    </div>
                ))}
            </div>
            {/* Show results */}
            <div>
                {results.map((result, index) => (
                    <h2 style={{ marginLeft: '20%', color: 'white', fontWeight:'900', fontSize:'42px' }} key={index}>Results: Congratulations! You won {result}</h2>
                ))}
                
            </div>
        </div>
    );
};
export default SpinnerGameWithImages;