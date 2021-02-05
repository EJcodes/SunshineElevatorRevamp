import React from 'react';
import Icon1 from './Images/ResidentialHousing.svg';
import Icon2 from './Images/svg-12.svg';
import Icon3 from './Images/svg-11.svg';
import Indust from'./Images/svg-indust.svg';
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
                    <SectorIcon src={Indust}/>
                    <SectorH2Card>Industrial</SectorH2Card>
                </SectorCard>

                <SectorCard>
                    <SectorIcon src={Icon1}/>
                    <SectorH2Card>Residential Housing</SectorH2Card>
                </SectorCard>
                
                <SectorCard>
                    <SectorIcon src={Icon2}/>
                    <SectorH2Card>Commercial Buildings</SectorH2Card>
    
                </SectorCard>
                <SectorCard>
                    <SectorIcon src={Icon3}/>
                    <SectorH2Card> Education</SectorH2Card>
                    
                </SectorCard>
                <SectorCard>
                    <SectorIcon src={Icon3}/>
                    <SectorH2Card> Healthcare </SectorH2Card>
                    
                </SectorCard>
                <SectorCard>
                    <SectorIcon src={Icon3}/>
                    <SectorH2Card> Retail </SectorH2Card>
                    
                </SectorCard>
            </SectorWrapper>
        </SectorContainer>
            
        
    )
 }
    export default SectorServices;


