import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';

import { 
HeroContainer,
HeroBg,
VideoBg,
HeroH1,
HeroContent,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight 
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/
                mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Sunshine Elevator 
                </HeroH1>
                <HeroP>
                    "We strive for excellence"
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                    smooth={true} duration={500} spy={true}
                    exact='true' offset={-80}
                    to='contactus'
                     onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                        Contact Us{hover ? <ArrowForward /> : <ArrowRight/>}

                    </Button>
                </HeroBtnWrapper>

            </HeroContent>
        </HeroContainer>
    );
};
export default HeroSection;