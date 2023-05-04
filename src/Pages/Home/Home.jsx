import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import Chefs from './Chefs';
import { useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import About from './About/About';
import GetInTouch from './GetInTouch/GetInTouch';
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {
    useEffect(() => {
      AOS.init();
    }, []);
    const navigation = useNavigation()
    if (navigation.state === "loading") {
      return <Spinner></Spinner>;
    }
    return (
      <div>
        <Banner></Banner>
        <About></About>
        <Chefs></Chefs>
        <GetInTouch></GetInTouch>
      </div>
    );
};

export default Home;