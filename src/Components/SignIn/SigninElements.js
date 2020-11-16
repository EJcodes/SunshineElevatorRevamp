import styled from 'styled-components';
import { Link } from 'react-router-dom';


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
                    
                    // Second Style
                    
                    
export const Container = styled.div`

position: relative;
width: 100%;
min-height: 100vh;
overflow: hidden; 
`;

export const FormWrap = styled.div`
    position: absolute;
    width: 100%;
    height:100%;
    top:0;
    left:0; 
    
`;

export const FormContent = styled.div`


`;



export const Form = styled.form`
font-family: 'Poppins', sans-serif;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

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
    color: #fff
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    transition: .5s;

    &:hover{
        background-color: #4d84e2;
    }
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #618DAF;
    font-size: 14px;
`;



export const PanelsContainer = styled.div`

`

   