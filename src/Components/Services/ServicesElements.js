import styled from 'styled-components';


export const ServicesContainer= styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media only screen 
    and (device-width: 428px) 
    and (device-height: 926px) 
    and (orientation : landscape) 
    and (-webkit-device-pixel-ratio: 3) { 
        height: 1300px;

    }
    @media screen and (min-width: 768px) and (max-width:1020px) {
       height:812px;
    }
    // @media screen and (max-width: 834px) {
    //     height: 1000px;
    // }

    // @media screen and (max-width: 490px) {
    //     height: 812px;
    // }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    
   

    @media screen and (min-width: 768px) and (max-width:1020px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    // @media screen and (max-width: 768px) {
    //     grid-template-columns: 1fr 1fr;
    //     padding: 0 20px;
    //     grid-gap:10px;
    // }
`;

export const ServicesCard = styled.div`
    background:#fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 450px;
    min-height: 313px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    
    @media screen and (max-width: 768px) {
        max-height: 170px;
        min-height: 170px;
        max-width: 170px;
        min-height: 170px;
        padding: 10px;
    }

`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        height: 0px;
        width: 0px;
    }

`

export const ServicesH1 = styled.h1`
    display: block;
    font-size: 2.5rem;
    color: #D3602E;
    margin-bottom: 64px;
    margin-top: 34px;
    
    @media screen and (max-width: 480px){
        overflow: hidden;
        margin: 0 auto;
        font-size: 2rem;
        padding-top: 35px;
        padding-bottom: 60px;
    }
`

export const ServicesH2 = styled.h2`
    font-size: .85rem;
    margin-bottom: 10px;
    text-align: center;
`

export const ServicesP = styled.p`
    font-size: .7rem;
    text-align: center;

`
