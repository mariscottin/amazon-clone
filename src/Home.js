import React, { useState, useEffect } from 'react'
import './Home.css';
import Product from './Product';
import { useStateValue } from './StateProvider';

function Home() {
    const [{ products }] = useStateValue();
    const [windowWidth, setWindowWidth] = useState();

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src={windowWidth > 767 ?
                        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
                        :
                        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2020/May/Hero/Karu_45M_en_US._SX1242_CB432509718_.jpg"
                    }
                    alt="Hero Background"
                />

                <div className="home__row">
                    <Product id="1" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" rating={5} />
                    <Product id="2" title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red" price={64.00} image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg" rating={4} />
                </div>
                <div className="home__row">
                    <Product id="3" title="AmazonBasics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot" price={14.49} image="https://images-na.ssl-images-amazon.com/images/I/71p11135VSL._AC_SL1500_.jpg" rating={4} />
                    <Product id="4" title="Garmin Forerunner 235, GPS Running Watch, Black/Gray" price={161.72} image="https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SL1500_.jpg" rating={4} />
                    <Product id="5" title="Oculus Quest All-in-one VR Gaming Headset – 128GB" price={649.00} image="https://images-na.ssl-images-amazon.com/images/I/51odsYyURHL._SL1000_.jpg" rating={5} />
                </div>
                <div className="home__row">
                    <Product id="6" title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)" price={548.99} image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
