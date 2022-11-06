import  './searchItem.css';

const SearchItem = () => {
    return (
        <div className='searchItem'>
             <img src="https://images1.apartments.com/i2/C-YpsVol5ovBPaqnmUkjRhVcQuZmAQoGEQJghKKuexk/117/the-lucie-baltimore-md-building-photo.jpg" alt="" className="siImg" />
             <div className="siDes">
                <h1 className="siTitle">Tower street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio . 1 bathroom . 21 meter-squre 1 full bed
                </span>
                <span className="siCancelOop">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
                
             </div>
             <div className="siDetails">
                    <div className="siRating">
                        <span>Excellent</span>
                        <button>8.9</button>
                    </div>
                    <div className="siDetaliTexts">
                        <span className="siPrice">$123</span>
                        <span className="siTaxOp">Includes taxes and fees</span>
                        <button className="soCheckButton">See availability</button>
                    </div>
             </div>
         
        </div>
    );
};

export default SearchItem;