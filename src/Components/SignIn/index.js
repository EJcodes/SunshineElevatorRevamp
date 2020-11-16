import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import {    
    Container,
    FormWrap,
    InputField,
    SigninSignup,
    Icon,
    Icon2,
    Form,
    FormContent,
    FormH1,
    FormInput,
    FormButton,
    Text,
    PanelsContainer
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
                            <FormInput type='email' required placeholder='Username'/>
                         </InputField>
                         <InputField>
                         <Icon2><FaLock/></Icon2>
                            
                            <FormInput type='password' required placeholder='Password' />
                         </InputField>
                         <FormButton type='submit'>Continue</FormButton>
                         <Text>Forgot password</Text>
                     </Form>
                  
                 </FormContent>
             </FormWrap>

             <PanelsContainer></PanelsContainer>
         </Container>
        </>
    );
};

export default SignIn;