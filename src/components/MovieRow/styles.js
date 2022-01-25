import styled from "styled-components";

export const Movies = styled.div`
    margin-bottom: 30px;

    h2 {
        margin: 0px 0px 0px 30px;
    }
`;

export const MovieListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const MovieRowList = styled.div`
    width: 999999999px;
`;

export const MovieRowItem = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;
    
    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }

    img:hover {
        transform: scale(1);
    }
`;