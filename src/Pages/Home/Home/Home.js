import React from 'react';
import Services from '../../Services/Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import TopBrands from '../TopBrands/TopBrands';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Review></Review>
            <TopBrands></TopBrands>
            <Footer></Footer>
        </div>
    );
};

export default Home;