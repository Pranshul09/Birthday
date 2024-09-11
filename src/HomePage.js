import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import birthday from './decor.jpg'
function HomePage() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/spinner');
    };
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
    return (
        <div style={myStyle}>
            <div style={{
                alignContent: 'center', display: 'flex',
                alignItems: 'center',
                marginTop: '250px',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <h1 style={{ fontSize: '80px', fontWeight: '900', color: '#ec407a',marginBottom:'-20px' }}>Happy Birthday!</h1>
                <p style={{ color: '#ec407a', fontSize: '35px', fontWeight: '600' }}>Click the button below to collect your gift!</p>
                <Button variant="secondary" size="lg" onClick={handleButtonClick} style={{ color: '#9167e4', padding: '10px 20px', background: 'transparent', borderColor: '#884dff', fontSize: '40px', borderRadius: '20px' }} >
                    Click Here to Collect Your Gift
                </Button>


            </div>
        </div>
    );
}
export default HomePage;