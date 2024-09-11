import React, { useState, useEffect } from 'react';
import './SpinnerPageOne.css';
import One from './One.jpg'
import Two from './Two.jpg'
import Three from './Three.jpg'
import Four from './Four.jpg'
import Five from './Five.jpg'
import Six from './Six.jpg'
import birthday from './bubble.jpg'

import WheelComponent from 'react-wheel-of-prizes'


const SpinnerPage = () => {
    const prizeImages = [One, Two, Three, Four, Five, Six];
    const segColor = ['Piano', 'Cow soft toy', 'Converse Shoes', 'Dust Pan', 'Sports Bike', 'Many Poko Pants'];
    const predefinedWins = [1, 3, 5]; // Adjust based on your desired results
    let [spinCount, setSpinCount] = useState(3);
    let [dance, setDance] = useState(false);
    const [spinsLeft, setSpinsLeft] = useState(3);
    const [currentPrize, setCurrentPrize] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const handleSpin = () => {
        if (spinCount > 0 && !isSpinning) {
            setIsSpinning(true);
            // Pre-select the prize based on the spin count
            const prizeWon = predefinedWins[spinCount];
            // Simulate spin duration and display result
            setTimeout(() => {
                setCurrentPrize(prizeWon);
                setSpinCount(spinCount - 1);
                setIsSpinning(false);
            }, 3000); // Simulate spin time
        }
    };
    const onFinished = (winner) => {
        setCurrentPrize(winner)
        if (spinCount == 0) {
            setDance(true)
        }
        if (spinCount >= 1) {
            spinCount = spinCount - 1
            setSpinCount(spinCount)
        }

        console.log(winner)
    }
    useEffect(() => {
        if (dance) {

        }
    }, [dance])
    const myStyle = {
        backgroundImage:
            `url(${birthday})`,
        height: "100%",
        width: '100%',
        // marginTop: "-100px",
        backgroundSize: "cover",
        position: "fixed",

        backgroundRepeat: "no-repeat",
    };
    const seg = [
        { src: One },
        { src: Two },
        { src: Three },
        { src: Four },
        { src: Five },
        { src: Six }
    ];
    return (
        <div style={myStyle}>

            {dance == true ? <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ color: 'white', fontWeight: '900', fontSize: '70px', marginBottom: '-30px', marginLeft:'15%' }}>Congratulations on your great win!</h1>
                <h1 style={{ color: 'white', fontWeight: '600', fontSize: '60px', marginBottom: '-30px', marginBottom:'50px', marginLeft:'12%' }}>You won Dust-pan, Cow soft toy and Many Poko Pants(Now with 60% more absorbing power)!!!</h1>
                <div style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {/* <img src={dancing} alt='gif' style={{ width: "50%" }} /> */}
                </div>

            </div> :
                <div className="spinner-container">
                    <h1 style={{ color: 'white', fontWeight: '900', fontSize: '70px', marginBottom: '-30px' }}>Spin the Wheel and win a gift!</h1>
                    <p style={{ color: 'white', fontWeight: '400', fontSize: '30px' }}>You have {spinCount} spins left.</p>
                    <div style={{ marginRight: '-450px' }}>
                        <WheelComponent
                            segColors={seg.map((image) => (
                                <img src={image.src} alt={'image'} style={{ width: '30px', height: '30px' }} />
                            ))}
                            segments={segColor}
                            // segColors={prizeImages}
                            //  segColors={['#FF5733', '#33FF57', '#3357FF', '#FF33A2', '#F3FF33', '#33FFF5']} 
                            winningSegment='won 3'
                            onFinished={(winner) => onFinished(winner)}
                            primaryColor='skyBlue'
                            contrastColor='black'
                            buttonText='Spin'
                            isOnlyOnce={false}
                            size={290}
                            upDuration={100}
                            downDuration={1000}
                            fontFamily='Arial'
                        />
                    </div>

                    {currentPrize && <h2 style={{ color: 'white', fontWeight: '400', fontSize: '20px', marginTop: '400px' }}>You won: {currentPrize}!</h2>}
                </div>}
        </div>
    );

};

export default SpinnerPage;


// import React, { useState } from 'react';
// import './Spinner.css';
// import One from './One.jpg'
// import Two from './Two.jpg'
// import Three from './Three.jpg'
// import Four from './Four.jpg'
// import Five from './Five.jpg'
// import Six from './Six.jpg'


// const SpinnerPage = () => {
//     const [spinsLeft, setSpinsLeft] = useState(3);
//     const [result, setResult] = useState(null);
//     const [isSpinning, setIsSpinning] = useState(false);
//     const prizes = ['Piano', 'Cow soft toy', 'Converse Shoes', 'Dust Pan', 'Sports Bike', 'Many Poko Pants'];
//     const prizeImages = [One, Two, Three, Four, Five, Six];

//     const spinWheel = () => {
//         if (spinsLeft > 0 && !isSpinning) {
//             setIsSpinning(true);
//             const randomIndex = Math.floor(Math.random() * prizes.length);
//             setTimeout(() => {
//                 setResult(prizes[randomIndex]);
//                 setSpinsLeft(spinsLeft - 1);
//                 setIsSpinning(false);
//             }, 2000); // Simulate spin duration
//         }
//     };
//     return (
//         <div style={{ textAlign: 'center', marginTop: '100px' }}>
//             <h1 className="spin">Spin the Wheel!</h1>
//             <p className="spin">You have {spinsLeft} spins left.</p>
//             <div className="spinner">
//                 <div className={isSpinning ? 'spinner-wheel spinning' : 'spinner-wheel'}>
//                     {/* {prizes.map((prize, index) => (
//                         <div key={index} className="spinner-segment">
//                             {prize}
//                         </div>
//                     ))} */}
//                     {prizeImages.map((prize, index) => (
//                         <img key={index} className="spinner-segment" src={prize} />


//                     ))}

//                 </div>
//             </div>
//             {result && <h2 style={{marginTop:'170px',marginBottom:'-170px' }}>Congratulations! You won: {result}</h2>}
//             <button
//                 onClick={spinWheel}
//                 disabled={spinsLeft === 0 || isSpinning}
//                 style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10%', marginLeft: '-2%', color: '#9167e4', padding: '10px 20px', background: 'transparent', borderColor: '#884dff', fontSize: '40px', borderRadius: '20px' }}
//             >
//                 {isSpinning ? 'Spinning...' : 'Spin'}
//             </button>
//         </div>
//     );
// };
// export default SpinnerPage;


// import React, { useState } from 'react';
// import { Wheel } from 'react-custom-roulette'; // Replace with your own spinner component
// const SpinnerWithPredefinedWins = () => {
//     // Array of prizes on the wheel
//     const prizes = [
//         { option: 'Prize 1' },
//         { option: 'Prize 2' },
//         { option: 'Prize 3' },
//         { option: 'Prize 4' },
//         { option: 'Prize 5' },
//         { option: 'Prize 6' }
//     ];
//     // Predefined outcomes for each spin
//     const predefinedResults = [0, 2, 5]; // Indices corresponding to prizes on the wheel
//     // Track number of spins and selected results
//     const [spinCount, setSpinCount] = useState(0);
//     const [selectedIndex, setSelectedIndex] = useState(null);
//     const [spinning, setSpinning] = useState(false);
//     const handleSpin = () => {
//         if (spinCount < 3) {
//             setSpinning(true);
//             const result = predefinedResults[spinCount]; // Get predefined result
//             setSelectedIndex(result);
//             // Simulate the spinning process (example: with a timeout)
//             setTimeout(() => {
//                 setSpinning(false);
//                 setSpinCount(spinCount + 1); // Increment spin count
//             }, 3000); // Adjust time as per the spinning animation duration
//         } else {
//             alert('You have used all 3 spins!');
//         }
//     };
//     return (
//         <div>
//             <h1>Spin the Wheel!</h1>
//             <Wheel
//                 mustStartSpinning={spinning}
//                 prizeNumber={selectedIndex}
//                 data={prizes}
//                 onStopSpinning={() => setSpinning(false)} // Wheel stops spinning
//             />
//             <button onClick={handleSpin} disabled={spinning || spinCount >= 3}>
//                 Spin {spinCount < 3 ? `(${3 - spinCount} left)` : '(No spins left)'}
//             </button>
//             <div>
//                 <h2>Previous Wins:</h2>
//                 <ul>
//                     {predefinedResults.slice(0, spinCount).map((result, index) => (
//                         <li key={index}>{prizes[result].option}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };
// export default SpinnerWithPredefinedWins;


