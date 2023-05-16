import styled from "styled-components";

export const Header = styled.header`
height:15vh;
background-color: black;
nav{
    border:solid blue;
    width:100%;
    height:15vh;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
}
`
export const IconNav = styled.img`
    width:4vw;
    transition: ease-in-out 0.2s;
    `

export const Icons = styled.div`
    border:solid yellow;
    background-color: yellow;
    width:33%; 
    height:90%; 
     display:flex;
justify-content:space-evenly;
align-items:flex-end;
`
export const PortifolioLInk = styled.div`
    border:solid red;
    background-color: red;
    width:33%; 
    height:90%; 
     display:flex;
justify-content:flex-start;
align-items:flex-end;
text-transform:uppercase;

`
export const SobreLInk = styled.div`
    border:solid wheat;
    background-color: wheat;
    width:33%; 
    height:90%; 
     display:flex;
justify-content:flex-start;
align-items:flex-end;
text-transform:uppercase;
`