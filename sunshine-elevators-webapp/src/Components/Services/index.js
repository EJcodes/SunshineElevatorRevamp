import React from 'react';
import Icon1 from '../images/svg-$.svg';
import Icon2 from '../images/svg-12.svg';
import Icon3 from '../images/svg-11.svg';
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
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP> We stay competitive with our pricing to reduce your overall expenses without reducing quality of our work for our costumers.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Quick Response Times</ServicesH2>
                    <ServicesP> We take pride in our quick and direct responses with our customers so they stay in the loop during unforeseen circumstances. 
                        
                        </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Stellar Costumer Service</ServicesH2>
                    <ServicesP> Sunshine Elevator makes sure to value and sustain the relationships with customers with quality work and a great attitude.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        
    )
 }
    export default Services;


