import React,{useState} from 'react'
import './Main.css'
import UpNavigation from './Components/UpNavigation';
import Discription from './Components/Discription';
import AboutCompany from './Components/AboutCompany';
import WorkCatalog from './Components/WorkCatalog';
import TimingAndDelivery from './Components/TimingAndDelivery';
import AboutKashpo from './Components/AboutKashpo';
import ContactWithUs from './Components/ContactWithUs';

export default function Main( {isAuthorizate, setIsAuthorizate} ) {

    const [opacity, setOpacity ] = useState('');

  return (
        <div className='Main'>
            <UpNavigation  isAuthorizate = {isAuthorizate} 
                           setIsAuthorizate = {setIsAuthorizate}
                           setOpacity={setOpacity}/>
            <Discription />
            <AboutCompany />
            <WorkCatalog />
            <TimingAndDelivery />
            <AboutKashpo />
            <ContactWithUs /> 
        </div>
  )
}
