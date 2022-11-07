import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import  './hotel.css';

const Hotel = () => {
  const photos = [
    {src:"https://images.adsttc.com/media/images/6345/5703/7a53/2742/b7af/1281/large_jpg/hide-and-seek-apartments-valerie-schweitzer-architects_26.jpg?1665488651"},

    {src:"https://images.adsttc.com/media/images/6345/5703/7a53/2742/b7af/1281/large_jpg/hide-and-seek-apartments-valerie-schweitzer-architects_26.jpg?1665488651"},

    {src:"https://images.adsttc.com/media/images/6345/5703/7a53/2742/b7af/1281/large_jpg/hide-and-seek-apartments-valerie-schweitzer-architects_26.jpg?1665488651"},

    {src:"https://images.adsttc.com/media/images/6345/5703/7a53/2742/b7af/1281/large_jpg/hide-and-seek-apartments-valerie-schweitzer-architects_26.jpg?1665488651"},

    {src:"https://images.adsttc.com/media/images/6345/5703/7a53/2742/b7af/1281/large_jpg/hide-and-seek-apartments-valerie-schweitzer-architects_26.jpg?1665488651"},

    {src:"https://images.adsttc.com/media/images/6345/5703/7a53/2742/b7af/1281/large_jpg/hide-and-seek-apartments-valerie-schweitzer-architects_26.jpg?1665488651"}
  ]

 
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
                  <div className="hotelImages">
                  {
                    photos.map(photo=>(
                      <div className="hotelImgWrapper">
                        <img src={photo.src} alt="" className="hotelImg" />
                      </div>
                    ))
                  }
                  </div>
                  <div className="hotelDetails">
                    <div className="hotelDetailTExts">
                      <h1 className="hotelTitle">Stay in the heart of krakow</h1>
                      <p className="hotelDes">
                        Located a 5-minute wali from St. Florin's Gate in krakow ,Tower Street Apartments has accommodations with air conditioning and  free wifi.The units come with  hardwood  floors and feature  a fully equipped kitchenette visit a microwave, a flat-screen Tv,and a private bathroom with shower and hairdryer . A fridge is also offered , as well as an electric tea pot  and a coffee machine .Popular points of interest near the apartment include Cloth Hall , Main Market Square and Town Hall Tower.The  nearest airport is Join Paul II International Krakow-alice,16.1 km from Tower Street Apartments,and the property offers a paid airport shuttle service.
            
                      </p>
                    </div>
                    <div className="hotelDetailsPrice">
                      <h1>Perfect for a 9-night saty!</h1>
                      <span>Located in the real heart of krakow , this property had an excellent location score of 9.8!</span>
                      <h2>
                        <b>$945</b>(9 nights)
                      </h2>
                      <button>Reserve or Book Now!</button>
                       
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;