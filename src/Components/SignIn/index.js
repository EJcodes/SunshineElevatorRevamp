import React from 'react';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';
import '../Fonts/Poppins-Black.ttf'
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

} from './SigninElements';

const SignIn = () => {

    return (
        <>
         <Container>
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
                         <FormButton type='submit'>Continue</FormButton>
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
                         <FormButton type='submit'>Continue</FormButton>
                         <Text>Forgot password</Text>
                     </SignUpForm>

                 </FormContent>
             </FormWrap>

             <PanelsContainer>
                <LeftPanel>
                    <PanelH3>New here?</PanelH3>
                    <PanelP>stuff I would tell someone new to feel welcomed and valued.</PanelP>
                    <FormButton>Sign Up</FormButton>
                    <LeftPanelImg />
                </LeftPanel>
                

                <RightPanel>
                    <PanelH3>One of us ?</PanelH3>
                    <PanelP>Welcome back person that has been here before. How are you doing today?</PanelP>
                    <FormButton>Sign Up</FormButton>
                    <RightPanelImg />
                </RightPanel>


             </PanelsContainer>
         </Container>
        </>
    );
};

export default SignIn;