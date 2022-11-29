import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Main = styled.div`
    background-color: grey;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Header = styled.div`
    background-color: #009045;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`

export const Footer = styled.div`
    background-color: #009045;
    width: 100%;
    height: 4vh;
    text-align: right;
    justify-items: center;
    justify-content: center;
    font-size: calc(14px + 0.5vmin);
    color: white;
`