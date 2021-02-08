import React,{ useState } from 'react';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne, homeObjTwo } from '../Components/InfoSection/Data';
import Navbar from '../Components/Navbar';
import Services from '../Components/Services';
import Sidebar from '../Components/Sidebar';
import SectorServices from '../Components/Sectors/index'




const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };


    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle}  />  
          <HeroSection/>
          <InfoSection {...homeObjOne}/>
          <SectorServices/>
          <Services/>
          <InfoSection {...homeObjTwo}/>
          <Footer/>
        </>
    );
};

export default Home;
