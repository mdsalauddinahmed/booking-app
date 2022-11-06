import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import  './hotel.css';

const Hotel = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <Header type="list"></Header>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                         <FontAwesomeIcon icon={faLocation}/>
                         <span>Elton St 125 New York</span>
                         
                  </div>
                  <span className="hotelDistance">
                    Excellent location --500m free center
                  </span>
                  <span className="hotelPriceHighlight">
                    Book a stay over $114 at this property and  got a free airport taxi
                  </span>
                </div>
            </div>
        </div>
    );
};

export default Hotel;