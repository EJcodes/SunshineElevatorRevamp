import React from 'react';
import Icon1 from '../Images/Certificate.svg'
import Icon2 from '../Images/ReduceExpenses.svg';
import Icon3 from '../Images/Responsetimes.svg';
import Icon4 from '../Images/CustomerService.svg';
import Icon5 from '../Images/Refab.svg';
import Icon6 from '../Images/FinancePackages.svg';
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
                    <ServicesIcon alt="Images representing ceritficate awarded"src={Icon1}/>
                    <ServicesH2>Certificates</ServicesH2>
                    <ServicesP>Sunshine Elevator every year, a month before the Certificate 
                        of Operation expires will perform a FREE pre-inspection to 
                        avoid fines. 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon alt="Images showing money being saved" src={Icon2}/>
                    <ServicesH2>Reduced Expenses</ServicesH2>
                    <ServicesP> Sunshine Elevator stays competitive with pricing to 
                        reduce your overall expenses without jeopardizing the quality 
                        of our work for our clients.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon alt="Image of a clock" src={Icon3}/>
                    <ServicesH2>Quick Responses</ServicesH2>
                    <ServicesP> Sunshine Elevator takes pride in our quick and direct 
                        responses with our customers so they stay in the loop 
                        during unforeseen circumstances. 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon alt="Image showing two people communicating" src={Icon4}/>
                    <ServicesH2> Customer Service</ServicesH2>
                    <ServicesP> Sunshine Elevator acknowledges and values the relationships 
                        with our clients, this solidified with our attention to detail and
                        and a great attitude.
                     </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon alt="Image representing the word Creative" src={Icon5}/>
                    <ServicesH2> Cab Refabrication</ServicesH2>
                    <ServicesP> Sunshine Elevator also offers re-fabrication of your current 
                        elevator cabs to give a much modern and clean look for everyone
                         to enjoy.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon alt="Image someone looking at financial options" src={Icon6}/>
                    <ServicesH2> Financing Packages</ServicesH2>
                    <ServicesP> Sunshine Elevator offers clients project financial packages for 
                        each project they are contracted to be apart of. 
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        
    )
 }
    export default Services;


