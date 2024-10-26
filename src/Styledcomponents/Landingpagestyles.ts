import styled from 'styled-components';


export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`   

export const LocationGridWhatsappNum = styled.a`
    margin-bottom: 1rem;
    line-height: 26px;
    font-weight: 500;
    font-size: 18px;
    display: block;
`
export const LocationGridButton = styled.button`
    border: 1px solid #fff !important;
    border-radius: 30px !important;
    color: #fff;
    background-color: transparent;
    position: relative;
    font-weight: 500;
    border: 1px solid #2c6f56;
    outline: 0;
    overflow: hidden;
    background: none;
    z-index: 1;
    cursor: pointer;
    transition: .08s ease-in;
    -o-transition: .08s ease-in;
    -ms-transition: .08s ease-in;
    -moz-transition: .08s ease-in;
    -webkit-transition: .08s ease-in;
    width: 190px !important;
    height: 45px !important;
    background: transparent !important;
    box-shadow: none !important;
`
export const LocationGridColumOne = styled.div``
export const LocationGridPara = styled.p`        
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1.25rem;
    font-weight: 500;
        `
export const LocationGridHeading = styled.h2`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
`
export const LocationGridColumtwo = styled.div``
export const LocationGridColumThree = styled.div``
export const LocationGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-flow: column;
    text-align: center;
`
export const FooterPara = styled.p`
    font-weight: 700;
    font-size: 36px;
    line-height: 56px;
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