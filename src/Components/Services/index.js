import React from 'react';
import Icon1 from '../Images/ResidentialHousing.svg'
import Icon2 from '../Images/svg-12.svg';
import Icon3 from '../Images/svg-11.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesP,
    ServicesCard,
    ServicesIcon
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Certificates</ServicesH2>
                    <ServicesP>Sunshine Elevator every year, a month before the Certificate of Operation expires, we'll perform
                        a FREE pre-inspection to avoid fines. 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduced Expenses</ServicesH2>
                    <ServicesP> SunShine Elevator stays competitive with our pricing to reduce your overall expenses without reducing quality of our work for our costumers.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Quick Responses</ServicesH2>
                    <ServicesP> SunShine Elevator takes pride in our quick and direct responses with our customers so they stay in the loop during unforeseen circumstances. 
                        
                        </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2> Costumer Service</ServicesH2>
                    <ServicesP> Sunshine Elevator acknowledges and values the relationship with our customers and we solidify this with our quality work and a great attitude.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2> Cab Refabrication</ServicesH2>
                    <ServicesP> Sunshine Elevator also offers re-fabrication of your current elevator cabs to give a much cleaner or modern look for everyone to enjoy.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2> Financing Packages</ServicesH2>
                    <ServicesP> Things that talk about the financing package that sunshine elevator offers to clients </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        
    )
 }
    export default Services;


