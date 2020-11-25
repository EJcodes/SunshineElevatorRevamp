import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
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
    let animation = false;

    let [containerCSS, setContainerCSS] = useState({
        css:[
            {transform: `translateY(-50%);` , right: '48%'},
            {transform: `translate(100%, -50%);` , right: '52%'}
        ]
    })
    
    const containerTransitionHandler = () => {
        setContainerCSS({
            css:[
                {transform: `translate(100%, -50%);` , right: '51%'}
            ]
        })
        
    }
   

    return (
        <>
            <Container transform={containerCSS.css[0].transform} right={containerCSS.css[0].right} >
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
                <LeftPanel>
                    <LPC>
                        <PanelH3>New here?</PanelH3>
                        <PanelP>stuff I would tell someone new to feel welcomed and valued.</PanelP>
                        <FormButton type='submit' onClick={containerTransitionHandler}>Sign Up</FormButton>
                    </LPC>

                    <LeftPanelImg src={LPI}/>
                </LeftPanel>
                <RightPanel>
                    <RPC>
                        <PanelH3>One of us ?</PanelH3>
                        <PanelP>Welcome back person that has been here before. How are you doing today?</PanelP>
                        <FormButton>Sign in</FormButton>
                    </RPC>

                    <RightPanelImg src={RPI}/>
                </RightPanel>


             </PanelsContainer>
         </Container>
        </>
    );
};

export default SignIn;