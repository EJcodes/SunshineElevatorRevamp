import React from 'react';
import Icon1 from '../Images/ResidentialHousing.svg';
import Icon2 from '../Images/Commercial.svg';
import Icon3 from '../Images/Education.svg';
import Icon4 from '../Images/HealthCare.svg';
import Icon5 from '../Images/Retail.svg'
import Indust from'../Images/Indust.svg';
import {
    SectorContainer,
    SectorCard,
    SectorH1,
    SectorH2Card,
    SectorWrapper,
    SectorIcon,

} from './SectorElements'

const SectorServices = () => {
    return (
        <SectorContainer id='sectors'>
            <SectorH1>Our Sectors</SectorH1>
            <SectorWrapper>
                
                <SectorCard>
                    <SectorIcon alt="Image of industrial factory"src={Indust}/>
                    <SectorH2Card>Industrial</SectorH2Card>
                </SectorCard>

                <SectorCard>
                    <SectorIcon alt="Image of an residential area" src={Icon1}/>
                    <SectorH2Card>Residential Housing</SectorH2Card>
                </SectorCard>
                
                <SectorCard>
                    <SectorIcon alt="Image of a commercial building" src={Icon2}/>
                    <SectorH2Card>Commercial Buildings</SectorH2Card>
    
                </SectorCard>
                <SectorCard>
                    <SectorIcon alt="Image of a building used for education" src={Icon3}/>
                    <SectorH2Card> Education</SectorH2Card>
                    
                </SectorCard>
                <SectorCard>
                    <SectorIcon alt="Image of a Hospital building" src={Icon4}/>
                    <SectorH2Card> Healthcare </SectorH2Card>
                    
                </SectorCard>
                <SectorCard>
                    <SectorIcon alt="Image of a retail store" src={Icon5}/>
                    <SectorH2Card> Retail </SectorH2Card>
                    
                </SectorCard>
            </SectorWrapper>
        </SectorContainer>
            
        
    )
 }
    export default SectorServices;


