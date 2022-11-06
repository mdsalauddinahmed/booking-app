import React from 'react';
import Featured from '../../Components/Featured/Featured';
import FeatureProperties from '../../Components/FeatureProperties/FeatureProperties';
import Header from '../../Components/Header/Header';
import MailList from '../../Components/MailLIst/MailList';
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
                <h1 className="homeTitle">Homes guests love</h1>
                <FeatureProperties></FeatureProperties>
                <MailList></MailList>
              </div>
        </div>
    );
};

export default Home;