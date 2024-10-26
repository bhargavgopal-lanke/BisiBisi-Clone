import styled from 'styled-components';


export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`   

export const FooterPara = styled.p`
    font-weight: 700;
    font-size: 36px;
    line-height: 56px;
    padding-top: 2.25rem;
    text-align: center;
`
export const FooterDiv = styled.div`
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;

    @media (min-width: 1200px) {
        max-width: 1200px;
    }

    @media (min-width: 600px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`
export const Footer = styled.footer`
    padding: 16px;
    background-color: rgb(44, 111, 86);
    color: #fff;
`