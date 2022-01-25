import styled from "styled-components";

export const HeaderBlock = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    background: ${props => props.background};
    transition: all ease 0.5s;
`;

export const HeaderLogo = styled.div`
height: 25px;
    img {
        height: 100%;
    }
`;

export const HeaderUser = styled.div`
    height: 35px;

    img {
        height: 100%;
        border-radius: 3px;
    }
`;