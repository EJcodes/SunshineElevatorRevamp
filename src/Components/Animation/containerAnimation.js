import React from 'react'

const containerAnimation = () => {
    return (`
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
    right: 48%;
    transform:translateY(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;
    }`
    )
}

export default containerAnimation
