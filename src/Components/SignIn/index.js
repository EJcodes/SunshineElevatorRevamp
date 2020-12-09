import React, { component,useState,setState } from 'react';
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
    FormButtonTrans,
    Text,
    PanelsContainer,
    LeftPanelImg,
    RightPanelImg,
    PanelH3,
    PanelP,
    LeftPanel,
    RightPanel,
    LPC,
    RPC 
} from './SigninElements';





const SignIn = props => {

    const changeFullname = (event) =>
        setSignupCred({ 
             fullname:event.target.value
        });
    
    const changeUsername = (event) =>
        setSignupCred({
             username:event.target.value
        })
    
    const changeEmail = (event) => 
        setSignupCred ({
             email:event.target.value
        })
    
    const changePassword = (event) => 
        setSignupCred({
             password:event.target.value
        })
    const [signupCred, setSignupCred ] = useState({
        fullName:'',
        username:'',
        password:'',
        email:'',
    })

    //Sign Up transition for left IMG, Container    
    let [CssTransitions, setCssTransitions] = useState({
        ContainerCss:[
            {transform: `translateY(-50%);` , right: '48%'},
        ],
        FormContent:[
            {left: `75%`}
        ],
        LeftImgCss:[
            {transform: `none`}
        ],
        LPContent:[
            {transform:`none`}
        ],
        RightImgCss:[
            {transform: `translateX(800px)`}
        ],
        LPCpointerEvents:[
            {pointerEvents: `all`}
        ],
        RPCpointerEvents:[
            {pointerEvents: `none`}
        ],
        signInform:[
            {zIndex:`2`, opacity:`1`, transform:`none` }
        ],
        signUpForm:[
            {zIndex:`1`, opacity:`0`, transform:`none` }
        ],
        ContainerCssMobile:[
            {transform:`translate(-50%)`,
             bottom:`32%`,
             right:`initial`,
             rightImgMobile:`translateY(300px)`,
             formContentMobileTransform: `translate(-50%, 100%)`
             }
        ]
    });
    
    const containerTransitionHandler = () => {
        setCssTransitions({
            ContainerCss:[
                {transform: `translate(100%, -50%)` , right: '48%'}
            ],
            FormContent:[{
                left: `25%`
            }],
            LeftImgCss:[
                {transform:`translateX(-900px)`}
            ],
            LPContent:[
                {transform:`translateX(-800px)`}
            ],
            RightImgCss:[
                {transform: `translateX(0px)`}
            ],
            LPCpointerEvents:[
                {pointerEvents: `none`}
            ],
            RPCpointerEvents:[
                {pointerEvents: `all`}
            ],
            signInform:[
                {zIndex:`1`, opacity:`0`,  transform:`left: 25%`}
            ],
            signUpForm:[
                {zIndex:`2`, opacity:`1`, transform:`left: 25%` }
            ],
            ContainerCssMobile:[
                {transform:`translate(-50%, 120%)`, 
                bottom:`32%`,
                 right:`initial`,
                 rightImgMobile:`translateY(0px)`,
                 formContentMobileTop:`30%`,
                 formContentMobileTransform: `translate(-50%, 0)`
                }
            ]
        });   
    };

    const containerTransitionHandlerRevert = () => {
        setCssTransitions({
        ContainerCss:[
            {transform: `translateY(-50%)` , right: '48%'},
        ],
        FormContent:[
            {left: `75%`}
        ],
        LeftImgCss:[
            {transform: `none`}
        ],
        LPContent:[
            {transform:`none`}
        ],
        RightImgCss:[
            {transform: `translateX(800px)`}
        ],
        LPCpointerEvents:[
            {pointerEvents: `all`}
        ],
        RPCpointerEvents:[
            {pointerEvents: `all`}
        ],
        signInform:[
            {zIndex:`2`, opacity:`1`, transform:`none`}
        ],
        signUpForm:[
            {zIndex:`1`, opacity:`0`, transform:`none` }
        ],
        ContainerCssMobile:[
            {transform:`translate(-50%)`,
            bottom:`32%`,
            right:`initial`,
            rightImgMobile:`translateY(300px)`,
            formContentMobileTransform: `translate(-50%, 100%)`
            }
        ]
        });
    };
    
    const onSubmit = (event)=>{
        event.preventDefault()

        const registered = {
            fullName: setSignupCred .fullName,
            username: setSignupCred .username,
            email: setSignupCred.email,
            password: setSignupCred.password
        }
    }
    
    return (
        <>
            <Container transform={CssTransitions.ContainerCss[0].transform} 
            right={CssTransitions.ContainerCss[0].right} 
            transformMobile={CssTransitions.ContainerCssMobile[0].transform}>
             <FormWrap>
                 <FormContent left={CssTransitions.FormContent[0].left}
                 formContentMobileTop={CssTransitions.ContainerCssMobile[0].formContentMobileTop}>    
                     <Form action="#"
                      opacity={CssTransitions.signInform[0].opacity} 
                      zIndex={CssTransitions.signInform[0].zIndex}>
                         <FormH1>Sign in</FormH1>
                         <InputField> 
                            <Icon2><FaUserAlt/></Icon2>
                            <FormInput
                             placeholder='Username'
                             />
                         </InputField>
                         <InputField >
                            <Icon2><FaLock/></Icon2>
                            <FormInput
                             type='password'
                             required placeholder='Password'/>
                         </InputField>
                         <FormButton type='submit' >Continue</FormButton>
                         <Text>Forgot password</Text>
                     </Form>
                     <SignUpForm action="#" 
                     opacity={CssTransitions.signUpForm[0].opacity}
                     zIndex={CssTransitions.signUpForm[0].zIndex} 
                     transform={CssTransitions.signUpForm[0].transform}>
                        <FormH1>Sign Up</FormH1>
                        <InputField>    
                            <Icon2><FaUserAlt/></Icon2>
                            <FormInput 
                            type='text'
                            onChange={changeFullname}
                            value={signupCred.fullname}
                            placeholder='Full name'
                            />
                        </InputField>
                        <InputField>    
                            <Icon2><FaUserAlt/></Icon2>
                            <FormInput 
                            type='text'
                            onChange={changeUsername}
                            value={signupCred.username}
                            placeholder='Username'
                            />
                         </InputField>
                         <InputField> 
                            <Icon2><FaEnvelope/></Icon2>
                            <FormInput
                             type='email'
                              required placeholder='Email'
                              onChange={changeEmail}
                              value={signupCred.email} />
                         </InputField>
                         <InputField>
                            <Icon2><FaLock/></Icon2>
                            <FormInput 
                            type='password' 
                            required placeholder='Password'
                            onChange={changePassword}
                            value={signupCred.password} 
                             />
                         </InputField>
                         <FormButton onClick={onSubmit}value='submit'>Continue</FormButton>
                         <Text>Forgot password</Text>
                     </SignUpForm>

                 </FormContent>
             </FormWrap>

             <PanelsContainer>
                <LeftPanel
                 pointerEvents={CssTransitions.LPCpointerEvents[0].pointerEvents}
                 transform={CssTransitions.LPContent[0].transform}
                >
                    <LPC
                     transform={CssTransitions.LPContent[0].transform}
                     pointerEvents={CssTransitions.LPCpointerEvents[0].pointerEvents}>
                        <PanelH3>New here?</PanelH3>
                        <PanelP>stuff I would tell someone new to feel welcomed and valued.</PanelP>
                        <FormButtonTrans type='submit' onClick={containerTransitionHandler}>Sign Up</FormButtonTrans>
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
                        <FormButtonTrans onClick={containerTransitionHandlerRevert}>Sign in</FormButtonTrans>
                    </RPC>

                    <RightPanelImg 
                    src={RPI} 
                    transform={CssTransitions.RightImgCss[0].transform}
                    transformMobile={CssTransitions.ContainerCssMobile[0].rightImgMobile}/>
                </RightPanel>


             </PanelsContainer>
         </Container>
        </>
    );
};

export default SignIn;