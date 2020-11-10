import React from 'react';
import { Button } from 'react-scroll';

import{
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper, 
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './infoElements'
const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>Topline</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                                <Button to="home"></Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};
    
export default InfoSection;