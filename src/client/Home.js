/** @format */

import React from 'react';
import Service from '../components/Service';
import Slide from '../components/Slide';
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Video from '../assets/videos/mainVideo.mp4';
import '../css/Home.css';

const Home = ({ user, logout }) => {
    return (
        <div>
            {/* 네비게이션 바 */}

            <Navbar user={user} logout={logout} />
            <main>
                <section>
                    <div className="main-font">
                        <h1>PROFESSIONAL & RELIABLE</h1>
                        <h1>building</h1>
                        <h1>cleaning</h1>
                    </div>
                    <video autoPlay loop muted>
                        <source src={Video} type="video/mp4" />
                    </video>
                    <div className="bgWith"></div>
                </section>
                {/* 회사소개 */}
                <About />
                {/* 기관 설명 */}
                <Service />
                {/* 슬라이드 바 */}
                <Slide />
            </main>
            {/* 푸터 */}
            <Footer />

            {/* <Route path="/" component={Home} exact /> */}
        </div>
    );
};

export default Home;
