import React from 'react';
import Featured from '../../Components/Featured/Featured';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import PropertyList from '../../Components/PropertyList/PropertyList';
 import './Home.css';
const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Header></Header>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList></PropertyList>
              </div>
        </div>
    );
};

export default Home;