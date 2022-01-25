import styled from "styled-components";

export const Movies = styled.div`
    margin-bottom: 30px;

    h2 {
        margin: 0px 0px 0px 30px;
    }

    .scrollIcon {
        position: absolute;
        width: 40px;
        height: 300px;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
        opacity: 0;
        transition: all ease 0.5s;
    }

    &:hover .scrollIcon {
        opacity: 1;
    }
`;

export const MovieListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const MovieRowList = styled.div`
    margin-left: ${props => props.listmarginLeft}px;
    width: ${props => props.listwidth}px;
    transition: all ease 0.5s;
`;

export const MovieRowItem = styled.div`
    display: inline-block;
    width: 200px;
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

export const MovieRowLeft = styled.div`
    left: 0;

    .lefticon {
        font-size: 50px;
    }
`;

export const MovieRowRight = styled.div`
    right: 0;
    .righticon {
        font-size: 50px;
    }
`;