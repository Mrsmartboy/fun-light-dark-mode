import styled from 'styled-components'

export const Container= styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
`

export const CardContainer=styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 40px;
   border: 2px solid #000000;
   border-radius: 10px;
   background-color: ${props=>props.bgColor?"#000000":"#ffffff"};
`

export const Header=styled.h1`
   color: ${props=>props.colour?"#ffffff":"#000000"};
   font-size: 30px;
   font-weight:bold ;
`

export const Button =styled.button`
   border: 2px solid #000000;
   background-color: #ffffff;
   border-radius: 10px;
   padding: 10px;
   cursor: pointer;
`