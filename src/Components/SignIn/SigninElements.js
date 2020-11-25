import styled from 'styled-components';
import { Link } from 'react-router-dom';
import containerAnimation from '../Animation/containerAnimation'


// export const Container = styled.div`
//     min-height: 692px;
//     position: fixed;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     top: 0;
//     z-index: 0;
//     overflow: hidden;
//     background: linear-gradient(
    //         108deg,
    //         rgba(37, 93, 136, 1) 0%,
    //         rgba(10, 201, 122, 1) 100%
    //     );
    // `;
    
    // export const FormWrap = styled.div`
    //     height: 100%;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    
    //     @media screen and (max-width: 400px) {
        //         height: 80%;
        //     }
        // `;
        
        // export const Icon = styled(Link)`
        //     margin-left: 32px;
        //     margin-top: 32px;
        //     text-decoration: none;
        //     color: #063356;
        //     font-weight: 700;
        //     font-size: 32px;
        
        //     @media screen and (max-width: 480px){
            
            //         margin-left: 16px;
            //         margin-top: 8px;
            //     }
            // `;
            
            
            // export const FormContent = styled.div`
            //     height: 100%;
            //     display: flex;
            //     flex-direction: column;
            //     justify-content;
            
            //     @media screen and (max-width: 480px){
                //         padding: 10px;
                //     }
                // `;
                
                
                // export const Form = styled.form`
                //     background: #010101;
                //     max-width: 400px;
                //     height: auto;
                //     width: 100$;
                //     z-index: 1;
                //     display: grid;
                //     margin: 0 auto;
                //     padding: 80px 32px;
                //     border-radius: 4px;
                //     box-shadow: 0 1px 3px rgba(0,0,0,0.0);
                
                //     @media screen and (max-width: 400px) {
                    //         padding: 32px 32px;
                    //     }
                    // `;
                    
                    
                    // export const FormH1 = styled.h1`
                    //     margin-bottom: 40px;
                    //     color: #618DAF;
                    //     font-size: 20px;
                    //     font-weight: 400;
                    //     tet-align: center;
                    // `;
                    
                    // export const FormLabel = styled.label`
                    //     margin-bottom: 8px;
                    //     font-size: 14px;
                    //     color: #618DAF;
                    // `;
                    
                    
                    // export const FormInput = styled.input`
                    //     padding: 16px 16px;
                    //     margin-bottom: 32px;
                    // `;
                    
                    // export const FormButton = styled.button`
                    //     background: #618DAF;
                    //     padding: 16px 0;
                    //     border: none;
                    //     border-radius: 4px;
                    //     color: #fff;
                    //     font-size: 20px;
                    //     cursor: pointer;
                    
                    // `;
                    
                    
                    // export const Text = styled.span`
                    //     text-align: center;
                    //     margin-top: 24px;
                    //     color: #618DAF;
                    //     font-size: 14px;
                    // `;
                    
                    // Second Style For Login Sign Up



export const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden; 

    &:before {
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #4481eb, #04befe);
    top: -10%;
    right: ${props => props.right};
    transform:${props => props.transform};
    z-index: 6;
    transition: 1.8s ease-in-out;
    }
`;


export const FormWrap = styled.div`
    position: absolute;
    width: 100%;
    height:100%;
    top:0;
    left:0; 
    
`;

export const FormContent = styled.div`
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: 50%;
    display: grid; 
    grid-templates-columns: 1fr;
    z-index: 5;
`;



export const Form = styled.form`
font-family: 'Poppins', sans-serif;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 5rem;
overflow: hidden;
grid-column: 1 / 2;
gird-row: 1 / 2; 
z-index: 2;
`;

export const SignUpForm = styled.form`
font-family: 'Poppins', sans-serif;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 5rem;
overflow:hidden;
grid-column: 1 / 2;
gird-row: 1 / 2; 
z-index: 1;
opacity: 0; 
`;

export const InputField = styled.div`
    max-width:380px;
    width: 100%;
    height: 55px;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 .4rem;
`
export const FormInput = styled.input`
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333

`; 

export const Icon2 = styled.div`
  text-align: center;
  line-height: 55px;
  color: #acacac;
  font-size: 1.1rem;
`;

export const FormH1 = styled.h1`
font-size: 2.2rem;
color: #444;
margin-bottom: 10px;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #618DAF;
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #063356;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
     }
`;


export const FormButton = styled.button`
    width: 150px;
    height: 49px;
    border: none;
    outline: none;
    border-radius: 49px;
    cursor: pointer:
    background-color: #5995fd;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    transition: .5s;
    transparent:
        margin:0;
        background: none;
        border:2px solid #fff;
        width: 130px;
        height: 41px;
        font-weight: 600;
        font-size: 0.8rem;
    

    &:hover{
        background-color: #4d84e2;
    };
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #618DAF;
    font-size: 14px;


`;



// Styled Components for Social Media links
export const SocialText= styled.p`
    padding: .7rem 0;
    font-size; 1rem;
`;

export const SocialMedia = styled.div`
    display: flex;
    justify-content: center;    
`;

export const SocialMediaIcon = styled.div`
    height: 46px;
    width: 46px;
    border: 1px solid #333;
    margin: 0 0.45rem;
    display:flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    border-radius: 50%;
    transition: 0.3s;

    &:hover{
        color: #4481eb;
        border-color: #4481eb;
    }
`;


// Styled Components for the Panels below
export const PanelsContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
   

    
`;

export const LeftPanel = styled.div`
    pointer-events: all;
    color: #fff;: 3rem 17% 2rem 12%;
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    z-index: 7;
`;

export const RightPanel = styled.div`
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    transition: .9s .6s ease-in-out;
    z-index 7;
`;

export const RPC = styled.div`
    color: #fff;
    pointer-events: none;
    ${props => props.transform};
    
`
export const LPC = styled.div`
    pointer-events: all;
    color: #fff;
    transition: .9s .6s ease-in-out;
    
`

export const PanelH3 = styled.h3`
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
`;

export const PanelP = styled.p`
    font-size: 0.95rem;
    padding: 0.7rem 0;
`;
export const RightPanelImg = styled.img`
    width: 100%;
    transition: 1.1s .4s ease-in-out;
    transform: ${props => props.transform};
`;
export const LeftPanelImg = styled.img`
    width: 100%;
    transform: ${props => props.transform};
    transition: 1.1s .4s ease-in-out;
     
`;



// Animation for the SignIn/SignOut


