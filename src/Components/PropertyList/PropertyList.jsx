import  './PropertyList.css';

const PropertyList = () => {
    return (
        <div className='pList'>

            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/620027.webp?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o=" alt=""
                className='pListImg' />
                <div className="pListTitle">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/02/27121904/featured-compressed-67.jpg" alt=""
                className='pListImg' />
                <div className="pListTitle">
                    <h1>Apartments</h1>
                    <h2>33 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg" alt=""
                className='pListImg' />
                <div className="pListTitle">
                    <h1>Resorts</h1>
                    <h2>23 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="http://www.fletcherliving.co.nz/assets/Uploads/AO-2022-06-15-FLETCHER-LIVING-0005-Edit-v3__FillWzEyMDAsNjMwXQ.jpg" alt=""
                className='pListImg' />
                <div className="pListTitle">
                    <h1>villas</h1>
                    <h2>31 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://teja12.kuikr.com/is/a/c/880x425/public/images/apartments/original_img/k9yqlp.gif" alt=""
                className='pListImg' />
                <div className="pListTitle">
                    <h1>Cabins</h1>
                    <h2>203 hotels</h2>
                </div>
            </div>

            
        </div>
    );
};

export default PropertyList;