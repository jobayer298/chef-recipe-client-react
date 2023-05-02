import React from 'react';
import Banner from './Banner/Banner';
import Chefs from './Chefs';
import { useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';


const Home = () => {
    const navigation = useNavigation()
    if (navigation.state === "loading") {
      return <Spinner></Spinner>;
    }
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;