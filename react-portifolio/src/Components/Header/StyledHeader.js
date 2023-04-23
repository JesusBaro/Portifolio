import styled from "styled-components";

export const Header = styled.header`
border:solid red;
display:flex;
justify-content:space-evenly;
align-items:center;
height:15vh;
nav{
    border:solid blue;
    width:70%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    ul{
        width:50%;
        border:solid pink;
        display:flex;
    justify-content:space-between;
    align-items:left;
    }
    div{
        border:solid yellow;
        width:30%; 
         display:flex;
    justify-content:space-evenly;
    align-items:center;
    }
}
`
export const LogoHeader = styled.img`
    border:solid pink;
    width:8vw;
`
export const IconNav = styled.img`
    width:4vw;
    transition: ease-in-out 0.2s;
    &:hover{
        width:5vw; 
    }`

export const  ListNav = styled.li`
        list-style:none;
        font-size:1.5em;
        transition: ease-in-out 0.2s;
        &:hover{
            font-size:1.6em;
            font-weight:500;
            text-decoration:underline;
        }

`
