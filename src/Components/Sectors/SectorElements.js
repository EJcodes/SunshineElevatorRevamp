import styled from 'styled-components';

export const SectorContainer= styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000000;

    @media screen and (max-width: 1284px) {
        height: 1000px;
    }

    @media screen and (max-width: 834px) {
        height: 1000px;
    }

`;

export const SectorWrapper = styled.div`
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


    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }
`;

export const SectorCard = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    min-height: 313px;
    max-height: 400px;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

   
    @media screen and (min-width: 428px) and (max-width: 767px) {
        min-height: 180px;
    }

    @media screen and (max-width: 768px) {
        min-height: 180px;

    }
`;

export const SectorIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
       height: 100px;
       width: 100px;
       margin-bottom: 0px;
    }

`;

export const SectorH1 = styled.h1`
    display: block;
    font-size: 2.5rem;
    color: #D35F2E;
    margin-bottom: 64px;
    margin-top: 34px;
    text-align: center;
    
    @media screen and (max-width: 480px){
        overflow: hidden;
        margin: 0 auto;
        font-size: 2rem;
        padding-top: 35px;
        padding-bottom: 60px;
    }

   
`;

export const SectorH2Card = styled.h2`
    display: block;
    font-size: 2rem;
    color: #AC4316;
    margin-bottom: 0px;
    margin-top: 0px;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        margin: 0 auto;
        font-size: .85rem;
        padding-top: 15px;

    }
    
    @media screen and (max-width: 490px){
        overflow: hidden;
        margin: 0 auto;
        font-size: 1rem;
        margin-bottom: 34px;
       
    }

`;

export const SectorH2 = styled.h2`
    font-size:1rem;
    margin-bottom: 10px;
    
`;

export const SectorP = styled.p`
    font-size: 1rem;
    text-align: center;

`;
