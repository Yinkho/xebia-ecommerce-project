import styled from 'styled-components';

export const PageProduitContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & > img {
    width: 340px;
    height: 500px;
  }

  & > button {
    margin: 0 0 20px 0;
    width: 100%;
    height: 45px;
    border-radius: 5px;
    background-color: #2B9BCC;
    font-size: 20px;
    color: #ffffff;
    transition: all 0.2s ease;
    border-width: 0px;
    outline: none;
    box-shadow: 0px 5px 15px #75C6E9;

    &:hover {
      background-color: #2394C5;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: none;
      transform: scale(0.98);
    }
  }

  & > p {
    color: #3B3B3B;
    width: 100%;
    font-size: 30px;
    margin: 10px 0;
    text-align: right;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30px;
  width: 65%;

  #title {
    font-size: 40px;
    color: #3B3B3B;
    margin-bottom: 20px;
  }

  #synopsis {

  }
`;