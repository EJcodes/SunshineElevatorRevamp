import React, { useState } from 'react';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';
import '../Fonts/Poppins-Black.ttf';
import RPI from '../../Images/svg-11.svg';
import LPI from '../../Images/svg-12.svg';

import {    
    Container,
    FormWrap,
    InputField,
    SignUpForm,
    Icon,
    Icon2,
    Form,
    FormContent,
    FormH1,
    FormInput,
    FormButton,
    Text,
    PanelsContainer,
    LeftPanelImg,
    RightPanelImg,
    PanelH3,
    PanelP,
    LeftPanel,
    RightPanel,
    LPC,
    RPC,
    
} from './SigninElements';



const SignIn = props => {
    //Sign Up transition for left IMG, Container    
    let [CssTransitions, setCssTransitions] = useState({
        ContainerCss:[
            {transform: `translateY(-50%);` , right: '48%'},
        ],
        LeftImgCss:[
            {transform: `none;`}
        ],
        LPContent:[
            {transform:`none`}
        ],
        RightImgCss:[
            {transform: `translateX(800px);`}
        ],
        LPCpointerEvents:[
            {pointerEvents: `all;`}
        ],
        RPCpointerEvents:[
            {pointerEvents: `none;`}
        ],
    });
 
    const containerTransitionHandler = () => {
        setCssTransitions({
            ContainerCss:[
                {transform: `translate(100%, -50%);` , right: '51%'}
            ],
            LeftImgCss:[
                {transform:`translateX(-850px);`}
            ],
            LPContent:[
                {transform:`translateX(-800px)`}
            ],
            RightImgCss:[
                {transform: `translateX(0px);`}
            ],
            LPCpointerEvents:[
                {pointerEvents: `none;`}
            ],
            RPCpointerEvents:[
                {pointerEvents: `all;`}
            ],
        });   
    };
   

    return (
        <>
            <Container transform={CssTransitions.ContainerCss[0].transform} right={CssTransitions.ContainerCss[0].right} >
             <FormWrap>
                 <Icon to="/">Sunshine Elevator</Icon>
                 <FormContent>    
                     <Form action="#">
                         <FormH1>Sign in</FormH1>
                         <InputField> 
                            <Icon2><FaUserAlt/></Icon2>
                            <FormInput placeholder='Username'/>
                         </InputField>
                         <InputField>
                            <Icon2><FaLock/></Icon2>
                            <FormInput type='password' required placeholder='Password' />
                         </InputField>
                         <FormButton type='submit' >Continue</FormButton>
                         <Text>Forgot password</Text>
                     </Form>

                     <SignUpForm action="#">
                        <FormH1>Sign Up</FormH1>
                        <InputField>    
                            <Icon2><FaUserAlt/></Icon2>
                            <FormInput placeholder='Username'></FormInput>
                         </InputField>
                         <InputField> 
                            <Icon2><FaEnvelope/></Icon2>
                            <FormInput type='email' required placeholder='Email'/>
                         </InputField>
                         <InputField>
                            <Icon2><FaLock/></Icon2>
                            <FormInput type='password' required placeholder='Password' />
                         </InputField>
                         <FormButton>Continue</FormButton>
                         <Text>Forgot password</Text>
                     </SignUpForm>

                 </FormContent>
             </FormWrap>

             <PanelsContainer>
                <LeftPanel >
                    <LPC transform={CssTransitions.LPContent[0].transform} pointerEvents={CssTransitions.LPCpointerEvents[0].pointerEvents}>
                        <PanelH3>New here?</PanelH3>
                        <PanelP>stuff I would tell someone new to feel welcomed and valued.</PanelP>
                        <FormButton type='submit' onClick={containerTransitionHandler}>Sign Up</FormButton>
                    </LPC>

                    <LeftPanelImg src={LPI} transform={CssTransitions.LeftImgCss[0].transform}/>
                </LeftPanel>
                <RightPanel >
                    <RPC 
                    transform={CssTransitions.RightImgCss[0].transform} 
                    pointerEvents={CssTransitions.RPCpointerEvents[0].pointerEvents}
                    >
                        <PanelH3>One of us ?</PanelH3>
                        <PanelP>Welcome back person that has been here before. How are you doing today?</PanelP>
                        <FormButton>Sign in</FormButton>
                    </RPC>

                    <RightPanelImg src={RPI} transform={CssTransitions.RightImgCss[0].transform}/>
                </RightPanel>


             </PanelsContainer>
         </Container>
        </>
    );
};

export default SignIn;