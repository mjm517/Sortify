import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from './../../Resources/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import querystring from 'querystring';

const client_id = '20992e27a1c343b69cb1f404a3fe8ad2';
const redirect_uri = 'http://localhost:5173/callback';
const scope = 'user-read-private user-read-email';

const generateRandomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export default function Login() {
    const handleLogin = () => {
        console.log("Login button clicked!"); // Add this line to log when the button is clicked

        const state = generateRandomString(16);
        const queryParams = new URLSearchParams({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        });
        const authUrl = `https://accounts.spotify.com/authorize?${queryParams.toString()}`;
        window.location.href = authUrl;
    };
    return (
        <div
            style={{
                backgroundColor: "#333",
                minHeight: "100vh",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container
                className="d-flex flex-column align-items-center"
                style={{
                    backgroundColor: "#333",
                    padding: '30px',
                    borderRadius: '10px',
                    textAlign: 'center',
                }}
            >
                <img src={Logo} alt="Logo" style={{
                    width: 200,
                    height: 200,
                    borderRadius: 99,
                    objectFit: 'contain'
                }} />
                <div style={{
                    fontSize: 17,
                    fontFamily: 'montserrat',
                    marginTop: 15,
                    color: 'white'
                }}>Create personalized mood-based playlist
                </div>
                <button className="btn btn-success btn-lg" onClick={handleLogin} style={{
                    padding: 16,
                    borderRadius: 99,
                    marginTop: 30
                }}>
                    Login With Spotify
                </button>
            </Container>
        </div>
    )
}
