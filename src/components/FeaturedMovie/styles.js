import styled from "styled-components";

export const Featured = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const FeaturedVerticalTranparent = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const FeaturedHorizontalTranparent = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
`;

export const FeaturedName = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

export const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  .featured--points,
  .featured--year,
  .featured--seasons {
    display: inline-block;
    margin-right: 15px;
  }
`;

export const FeaturedPoints = styled.div`
  color: #46d369;
`;

export const FeaturedYear = styled.div``;

export const FeaturedSeasons = styled.div``;

export const FeaturedDescription = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  width: 40%;
`;

export const FeaturedButtons = styled.div`
  margin-top: 15px;

  a {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
  }

  .featured--watchbutton {
      background: #fff;
      color: #000;
  }
  .featured--mylistbutton {
      background: #333;
      color: #fff;
  }

  a:hover {
      opacity: 0.7;
  }
`;

export const FeaturedGenres = styled.div``;
