import React from 'react';
import Icon1 from '../images/svg-$.svg';
import Icon2 from '../images/svg-12.svg';
import Icon3 from '../images/svg-11.svg';
import {
    SectorContainer,
    SectorH1,
    SectorH2,
    SectorWrapper,
    SectorP,
    SectorCard,
    SectorIcon,
    SectorH1Card
} from './SectorElements'

const SectorServices = () => {
    return (
        <SectorContainer id='sectors'>
            <SectorH1>Our Sectors</SectorH1>
            <SectorWrapper>
                <SectorCard>
                    <SectorH1Card>Industrial</SectorH1Card>
                    <SectorIcon src={Icon3}/>
                </SectorCard>
                <SectorCard>
                    <SectorIcon src={Icon1}/>
                    <SectorH1Card>Residntial {'\n'} Housing</SectorH1Card>
                </SectorCard>
                <SectorCard>
                    <SectorIcon src={Icon2}/>
                    <SectorH1Card>Commercial {'\n'} Buildings</SectorH1Card>
    
                </SectorCard>
                <SectorCard>
                    <SectorIcon src={Icon3}/>
                    <SectorH1Card> Education</SectorH1Card>
                    
                </SectorCard>
                <SectorCard>
                    <SectorIcon src={Icon3}/>
                    <SectorH1Card> Healthcare </SectorH1Card>
                    
                </SectorCard>
                <SectorCard>
                    <SectorIcon src={Icon3}/>
                    <SectorH1Card> Retail </SectorH1Card>
                    
                </SectorCard>
            </SectorWrapper>
        </SectorContainer>
            
        
    )
 }
    export default SectorServices;


