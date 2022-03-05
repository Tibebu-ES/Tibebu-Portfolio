import React from 'react';
import './Home.css';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';

function Home(props) {
    return (
        <div className='home-container'>
            <Profile />
            <Footer />
        </div>
    );
}

export default Home;