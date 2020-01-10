import React from 'react';
import './Styles.css';
import Login from './Login';




const Home = ({ history }) => {
    return (
        <div className="container-fliud cBox ">
            <div className="row">
                <div className="col-md-7 hm-lft">
                    <Login history={history} />
                </div>
                <div className="col-md-5 d-none d-md-block hm-rght" >
                    {/* <img style={{ width: "100%", height: "100%", resizeMode: 'contain' }} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt=""></img> */}
                </div>
            </div>

        </div>
    );
}

export default Home;